import React from "react";
interface Calculatorprops {
    title?: string;
    children?: React.ReactNode;
}
declare const Calculator: (props: Calculatorprops) => React.JSX.Element;
export default Calculator;
