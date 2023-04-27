import React from "react";

export default function Timer(props) {
    return(
        <div className={props.play ? "timer timer-glow" : "timer"}>
            <h2 id="timer-label">{props.text} </h2>
            <div id="time-left">{props.time}</div>
        </div>
    )
}