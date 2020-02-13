import * as React from "react";
import './ButtonComponent.css';

interface Props {
    children: any;
    className: string;
    onClick: () => void
}
  
export const ButtonComponent = (props: Props) => {
    return (
        <button onClick={props.onClick}
            className={props.className}
            type="button">
            {props.children}
        </ button>
    )
}

