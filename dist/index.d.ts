import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    children: React.ReactNode;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;

interface Calculatorprops {
    title?: string;
    children?: React.ReactNode;
}
declare const CalculatorV: (props: Calculatorprops) => React.JSX.Element;

export { Button, CalculatorV as Calculator };
