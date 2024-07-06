import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import EarthModel from "./earthmodel";
import Image from "next/image";
import { WeatherResponse } from "./weather-res";

async function MainWeather() {
  const city = await WeatherResponse("Mumbai");
  const iconurl = city.weather.map((icon: any) => icon.icon);
  return (
    <Card className="w-full bg-secondary rounded-2xl px-8 mt-4 flex flex-col-reverse items-center justify-between md:flex-row">
      <CardHeader className="flex items-center md:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-muted-foreground lg:text-5xl flex items-center gap-4">
          {city.name}
          <Image
            src={`http://openweathermap.org/img/w/${iconurl}.png`}
            width={80}
            height={80}
            alt="icon"
          />
        </h1>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {city.sys.country}
        </h3>

        <CardTitle className="text-[4rem]">
          {Math.round(city.main.temp)}&deg;C
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <EarthModel />
      </CardContent>
    </Card>
  );
}

export default MainWeather;
