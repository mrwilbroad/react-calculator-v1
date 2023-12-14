import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    children: React.ReactNode;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
