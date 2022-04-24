import React from "react";
import './Button.css';

export default props => {
    return (
        <div>
            <button className="button">{props.label}</button>
        </div>
    )
}