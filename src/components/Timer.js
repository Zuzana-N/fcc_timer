import React from "react";

export default function Timer(props) {
    return(
        <div className="timer">
            <h2 id="timer-label">Session</h2>
            <div id="time-left">{props.time}:00</div>
        </div>
    )
}