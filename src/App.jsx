import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [inputMinutes, setInputMinutes] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    if (secondsLeft > 0) {
      const interval = setInterval(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [secondsLeft]);

  const startTimer = () => setSecondsLeft(inputMinutes * 60);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="app h-screen " >
      <div className='m-auto  '>
      <h1 contenteditable data-heading="Dimensions" >Countdown Timer</h1>
      <input type="number" value={inputMinutes} onChange={(e) => setInputMinutes(e.target.value)} placeholder="Enter minutes" />
      <button className="custom ml-3"onClick={startTimer}>Start</button>
      <div className="timer mt-2">{formatTime(secondsLeft)}</div>
      </div>

    </div>
  );
};

export default App;