import React, { useState, useEffect } from 'react';
import './App.css';

const StopWatch = () => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0, tens: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          let newTens = prevTime.tens + 1;
          let newSeconds = prevTime.seconds;
          let newMinutes = prevTime.minutes;

          if (newTens === 100) {
            newTens = 0;
            newSeconds += 1;

            if (newSeconds === 60) {
              newSeconds = 0;
              newMinutes += 1;
            }
          }

          return { minutes: newMinutes, seconds: newSeconds, tens: newTens };
        });
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime({ minutes: 0, seconds: 0, tens: 0 });
  };

  return (
    <div className="stopwatch">
        <br />
      <h1>StopWatch</h1>
      <h2>Minutes, seconds, milliseconds</h2>

      <p>
        <span id="minutes">{String(time.minutes).padStart(2, '0')}</span> :{' '}
        <span id="seconds">{String(time.seconds).padStart(2, '0')}</span> :{' '}
        <span id="tens">{String(time.tens).padStart(2, '0')}</span>
      </p>

      <button onClick={startStopwatch} id="button-start">
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={stopStopwatch} id="button-stop">
        Stop
      </button>
      <button onClick={resetStopwatch} id="button-reset">
        Reset
      </button>
    </div>
  );
};

export default StopWatch;