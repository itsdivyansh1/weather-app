import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import EarthModel from "./earthmodel";
import { FetchTemp } from "./fetchtemp";
import Image from "next/image";

async function MainWeather() {
  const city = await FetchTemp("Mumbai");
  // const iconurl = city.weather.map((icon: any) => icon.icon);
  const temp = city.list[0];
  return (
    <Card className="w-full bg-secondary rounded-2xl px-8 mt-4 flex flex-col-reverse items-center justify-between md:flex-row">
      <CardHeader className="flex items-center md:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-muted-foreground lg:text-5xl flex items-center gap-4">
          {city.city.name}
          {/* <Image
            src={`http://openweathermap.org/img/w/${iconurl}.png`}
            width={80}
            height={80}
            alt="icon"
          /> */}
        </h1>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {city.city.country}
        </h3>

        <CardTitle className="text-[4rem]">
          {Math.round(temp.main.temp)}&deg;C
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <EarthModel />
      </CardContent>
    </Card>
  );
}

export default MainWeather;
