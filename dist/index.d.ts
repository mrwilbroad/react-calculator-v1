import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: String;
    children: React.ReactNode;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;

interface Calculatorprops {
    title?: String;
}
declare const Calculator: (props: Calculatorprops) => React.JSX.Element;

export { Button, Calculator };
