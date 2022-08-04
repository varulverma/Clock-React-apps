import React from "react";
import {useState, useEffect} from 'react';
import CircularDial from "../../SharedComponents/CircularDial/CircularDial";
import InputScroll from "../../SharedComponents/Input/InputScroll/InputScroll";
import Span from "../Stopwatch/Span";
import './Countdown.css';


function Countdown() {
  const [counterState, setcounterState]= useState(0)
  useEffect(()=>{console.log("countdown.js rerendered")})

    return (
      <>
      
      <CircularDial>
        {counterState === 0 && (
          <>
          <div className="countdownTimer">
            <InputScroll 
              inputId="hour"
              input="Hours"
              type="number"
              value="0"
              minValue="0"
              maxValue="59"
            />
            <InputScroll
              inputId="minute"
              input="Minutes" 
              type="number"
              value="0"
              minValue="0"
              maxValue="59"
            />
            <InputScroll 
              inputId="sec"
              input="Seconds"
              type="number"
              value="0"
              minValue="0"
              maxValue="59"
            />
          </div>
          <Span 
            text="Start"
            className="startCountdown"
            handleClick={()=>{
              // startTimer()
              setcounterState(1);
            }}
          />
          </>
        )}
        {counterState === 1 && (
          <>
           <Span 
           text="Stop"
           className="stopCountdown"
           handleClick={()=>{
              // stopTimer()
             setcounterState(0);
           }}
          />  
          <Span 
            text="Pause"
            className="pauseCountdown"
            handleClick={()=>{
              // pauseTimer()
              setcounterState(2);
            }}
          />
          </>
        )}
        {counterState === 2 && (
          <>
           <Span 
           text="Stop"
           className="stopCountdown"
           handleClick={()=>{
            // stopTimer()
             setcounterState(0);
           }}
          />  
          <Span 
            text="Resume"
            className="resumeCountdown"
            handleClick={()=>{
              // resumeTimer()
              setcounterState(2);
            }}
          />
          </>
        )}
        {counterState === 3 && (
          <>
           <Span 
           text="Dismiss"
           className="dismissCountdown"
           handleClick={()=>{
             setcounterState(0);
           }}
          />  
          
          </>
        )}

      </CircularDial>  
      </>

    );
  }
  export default Countdown;