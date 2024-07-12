import { useState, useEffect } from "react";
export default function Logout({ onSetIsLoggedIn }) {
  const [time, setTime] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      onSetIsLoggedIn(false);
    }
  }, [time, onSetIsLoggedIn]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <p className="logout-timer">
      You will be logged out in{" "}
      <span className="timer">{formatTime(time)}</span>
    </p>
  );
}
