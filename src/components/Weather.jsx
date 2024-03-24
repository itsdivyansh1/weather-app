import React, { useEffect, useState } from "react";
import GetTemp from "./GetTemp";

const Weather = ({ temp }) => {
  const date = new Date();
  const day = date.getDay();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [time, setTime] = useState(date);

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="max-md:text-start ">
      <GetTemp temp={temp} />
      <div className="text-2xl font-bold">{weekday[day]}</div>
      <div className="text-xl">
        {time.toLocaleDateString()} / {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Weather;
