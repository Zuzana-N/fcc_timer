import React, {useState} from "react";

export default function SessionLength(props) {
    const down = <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" viewBox="0 0 448 448"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>
    const up = <svg xmlns="http://www.w3.org/2000/svg"className="arrow-icon"  viewBox="0 0 448 448"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"/></svg>

    function decrease() {
        props.setTime(prevTime => prevTime - 1)
        if (props.time < 2) {
            props.setTime(1)
        }
    }
    function increase() {
        props.setTime(prevTime => prevTime + 1)
        if (props.time > 59) {
            props.setTime(60)
        }
    }
    
    return(
        <div>
            <h2 id="session-label">Session Length</h2>
            <button id="session-decrement" onClick={decrease} className="inline">{down}</button>
            <p id="session-length" className="inline">{props.time}</p>
            <button id="session-increment" onClick={increase} className="inline">{up}</button>

        </div>
    )
}