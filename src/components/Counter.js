import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Funkcja czyszcząca (cleanup) wywołana przy odmontowywaniu komponentu
    return () => clearInterval(interval);
  }, []); // Pusta tablica [] oznacza, że efekt wykona się tylko raz po załadowaniu komponentu

  return (
    <div>
      <h2>Minęło {seconds} sekund</h2>
    </div>
  );
};

export default Timer;