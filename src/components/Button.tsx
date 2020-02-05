import * as React from "react";
import './Button.css';

interface Props {
    children: any;
    className: string;
    onClick: () => void
}
  
export const Button = (props: Props) => {
    return (
        <button onClick={props.onClick}
            className={props.className}
            type="button">
            {props.children}
        </ button>
    )
}

