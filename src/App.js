import React, {useState} from 'react';
import './App.scss';
import BreakLength from "./components/BreakLength"
import SessionLength from "./components/SessionLength"
import Timer from "./components/Timer"
import Controls from "./components/Controls"
import About from "./components/About"


function App() {
  const [breakTime, setBreakTime] = useState(5)
  const [sessionTime, setSessionTime] = useState(25)
  const [play, setPlay] = useState(false)

  
  return (
    <div className="App">
      <h1>25 + 5 Timer</h1>
      <div className="length-controls">
        <BreakLength time={breakTime} setTime={setBreakTime}/>
        <SessionLength time={sessionTime} setTime={setSessionTime}/>
      </div>
      <Timer time={sessionTime}/>
      <Controls play={play} setPlay={setPlay} time={sessionTime} setTime={setSessionTime}/>
      <About />
      <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </div>
  );
}

export default App;
