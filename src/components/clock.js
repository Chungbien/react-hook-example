import React, { useEffect, useRef, useState } from "react";

function getTimeString() {
  const now = new Date();
  const hours = `0${now.getHours()}`.slice(-2);
  const minutes = `0${now.getMinutes()}`.slice(-2);
  const seconds = `0${now.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
  const [timeString, setTimeString] = useState(null);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const currentTimeString = getTimeString();
      setTimeString(currentTimeString);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return <div>Now is: {timeString}</div>;
}

export default Clock;
