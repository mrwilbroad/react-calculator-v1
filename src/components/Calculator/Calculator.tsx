import React from "react";

interface Calculatorprops {
  title?: string;
  children?: React.ReactNode;
}

interface inputProps {
  fn: number;
  sn: number;
}

const Calculator = (props: Calculatorprops) => {
  const [result, setResult] = React.useState("No result to display for now");
  const [value, setValue] = React.useState<inputProps>({
    fn: 0,
    sn: 0,
  });

  const getResult = (): void => {
    if (value.fn === 0 || value.sn === 0) {
      setResult("Cant make any calculation since values are empty!");
    } else {
      setResult(`output is ${value.fn + value.sn}`);
    }
  };

  return (
    <section>
      {props.title && <h1> {props.title!}</h1>}

      <section className="mt-3 p-3">
        {result && <span>Result is : {result}</span>}

        <section className="vstack gap-3">
          <input
            type="text"
            onChange={(e) =>
              setValue({
                ...value,
                [e.target.name]: e.target.value,
              })
            }
            value={value.fn}
            className="form-control col-3"
            name="fn"
          />

          <input
            type="text"
            onChange={(e) =>
              setValue({
                ...value,
                [e.target.name]: e.target.value,
              })
            }
            value={value.sn}
            className="form-control col-3"
            name="sn"
          />

          <button
            onClick={getResult}
            type="button"
            className="btn btn-outline-dark"
          >
            Get result{" "}
          </button>
        </section>
      </section>
    </section>
  );
};

export default Calculator;
