import { useState } from 'react';
import './Stopwatch.css';
import Span from './Span';
import CircularDial from '../../SharedComponents/CircularDial/CircularDial';

function Stopwatch(){
    const [stopWatchState, setstopWatchState]= useState(0)
    const [secPassed, setSecPassed] = useState(0);
    const [timerId, setTimerId] = useState(null);
    const startTimer = (_) => {
      let tId = setInterval(() => {
        setSecPassed((sec) => sec + 1);
      }, 1000);
      setTimerId(tId);
    };
    const stopTimer = () => {
      clearInterval(timerId);
      setSecPassed(0);
    };
    const pauseTimer = () => {
      clearInterval(timerId);
    };
    const resumeTimer = (_) => {
      startTimer();
    };
    const get2digValue = (num) => (num < 10 ? "0" + num : "" + num);
  
    const getFormatedTime = (secCount) => {
      let res = "";
      let sec = secCount % 60;
      secCount = parseInt(secCount / 60);
      let min = secCount % 60;
      secCount = parseInt(secCount / 60);
      let hour = secCount % 24;
      res =
        get2digValue(hour) +
        " : " +
        get2digValue(min) +
        " : " +
        get2digValue(sec);
      return res;
    };

    return (
        <>
        <CircularDial>
            {stopWatchState === 0 && (
                <Span 
                text="Start"
                className= "startTimer"
                handleClick={()=>{
                    startTimer();
                    setstopWatchState(1);
                }
                }
                />
            )
            }
            {stopWatchState === 1 && (
                <>
                <Span
                    text="Stop"
                    className="stopTimer"
                    handleClick={()=>{
                        stopTimer();
                        setstopWatchState(0);
                    }}
                />
                <Span
                    text={getFormatedTime(secPassed)}
                    className="timer"
                />
                <Span 
                    text="Pause"
                    className="pauseTimer"
                    handleClick={()=>{
                        pauseTimer();
                        setstopWatchState(2);
                    }}
                />
                </>
            )
            }
            {stopWatchState === 2 && (
                <>
                <Span
                    text="Stop"
                    className="stopTimer"
                    handleClick={()=>{
                        stopTimer();
                        setstopWatchState(0);
                    }}
                />
                <Span
                    text={getFormatedTime(secPassed)}
                    className="timer"
                />
                <Span 
                    text="Resume"
                    className="resumeTimer"
                    handleClick={()=>{
                        resumeTimer();
                        setstopWatchState(1);
                    }}
                /> 
                </>
            )
            }
                      
        </CircularDial>
        </>
    );
}
export default Stopwatch;