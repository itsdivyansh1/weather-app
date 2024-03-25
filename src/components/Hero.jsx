import React, { useEffect, useState } from "react";
import Weather from "./Weather";

const Hero = () => {
  const [city, setcity] = useState(null);
  // const [search, setsearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=480d0c20515b15a3deea167d97cab64d`;
      const response = await fetch(url);
      const resJson = await response.json();
      setcity(resJson.main.temp);
    };
    fetchApi();
  }, []);

  return (
    <div className="h-[90vh] w-full flex justify-center items-center max-md:flex-col-reverse">
      <div className="w-[60vw] h-[90vh] max-md:w-full flex justify-center items-center ">
        <Weather temp={city} />
      </div>
      <div className="w-[40vw] h-[90vh] flex justify-center items-center max-md:w-full pr-10">
        {city > 20
          ? (
              <img
                src="../images/cloud_sunny.svg"
                className="max-md:p-16"
                width={400}
              />
            ) ||
            city <
              20(
                <img
                  src="../images/cloud_rainy.svg"
                  className="max-md:p-16"
                  width={400}
                />
              )
          : "No data"}
      </div>
    </div>
  );
};

export default Hero;
