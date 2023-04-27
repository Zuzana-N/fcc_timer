import React, {useState, useEffect} from 'react';
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
  const [remainingTime, setRemainingTime] = useState(sessionTime*60)
  const [sessionToBreak, setSessionToBreak] = useState(false)
  
  //When start button is clicked
  const handleStart = () => {
    setPlay(prevPlay => !prevPlay)
  }

  // Timer countdown
  useEffect(() => {
    let timer
    if (play && remainingTime > -1) {
      timer = setTimeout(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000)
    return () => clearTimeout(timer)
    }
  }, [play, remainingTime])

  // Change from session to break and vice versa
  if (remainingTime === -1 ) {
    setSessionToBreak(prev => !prev)
    !sessionToBreak ? setRemainingTime(breakTime*60) : setRemainingTime(sessionTime*60)
    document.getElementById("beep").play()
  }

  //Display time
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
  };

  //When restart button is clicked
  const restart = () => {
    setSessionTime(25)
    setBreakTime(5)
    if (play) {
      setPlay(false)
    }
    if (sessionToBreak) {
      setSessionToBreak(false)
    }
    setRemainingTime(sessionTime*60)
    document.getElementById("beep").pause()
    document.getElementById("beep").currentTime = 0;
  }

  return (
    <div className="App">
      <h1>25 + 5 Timer</h1>
      <div className="length-controls">
        <SessionLength time={sessionTime} setTime={setSessionTime} remTime={remainingTime} setRemTime={setRemainingTime} play={play} sessOrBreak={sessionToBreak}/>
        <BreakLength time={breakTime} setTime={setBreakTime} remTime={remainingTime} setRemTime={setRemainingTime} play={play} sessOrBreak={sessionToBreak}/>
      </div>
      <Controls play={play} functionPlay={handleStart} functionRestart={restart}/>
      <Timer play={play} text={sessionToBreak ? "Break" : "Session"} time={formatTime(remainingTime)} />
      <About />
      {/* <audio id="beep" autoplay preload="auto" src="public/build_testable-projects-fcc_audio_BeepSound.wav"></audio> */}
      <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </div>
  );
}

export default App;
