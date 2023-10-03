import { useState, useEffect } from 'react';

function Folder() {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const currentYear = new Date().getFullYear();
  const newYear = new Date(`jan 1 ${currentYear + 1} 00:00:00`);

  useEffect(() => {
    function updateTimer() {
      const currentDate = new Date();
      const diff = newYear - currentDate;
      const d = Math.floor(diff / 1000 / 60 / 60 / 24);
      const h = Math.floor((diff / 1000 / 60 / 60) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setDays(d < 10 ? '0' + d : d.toString());
      setHours(h < 10 ? '0' + h : h.toString());
      setMinutes(m < 10 ? '0' + m : m.toString());
      setSeconds(s < 10 ? '0' + s : s.toString());
    }

    const timerInterval = setInterval(updateTimer, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className='text-white ' >
      <p className='text-center fs-3  ' >countdown</p>
      <p className='text-center fs-3 ' >To</p>
      <h2 className="newyear text-center">New Year</h2>
      <div className="counter text-center">
        <div className="box">
          <h2 id="days">{days}</h2>
          <small>Days</small>
        </div>
        <div className="box">
          <h2 id="hours">{hours}</h2>
          <small>Hours</small>
        </div>
        <div className="box">
          <h2 id="minutes">{minutes}</h2>
          <small>Minutes</small>
        </div>
        <div className="box">
          <h2 id="seconds">{seconds}</h2>
          <small>Seconds</small>
        </div>
      </div>
    </div>
  );
}

export default Folder;
