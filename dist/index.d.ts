import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    children: React.ReactNode;
}
declare const Button: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

interface Calculatorprops {
    title?: string;
    children?: React.ReactNode;
}
declare const Calculator: (props: Calculatorprops) => react_jsx_runtime.JSX.Element;

export { Button, Calculator };
