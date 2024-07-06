import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { FetchTemp } from "./fetchtemp";

async function WeekWeather() {
  const city = await FetchTemp("Mumbai");
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold tracking-tight">Week</h2>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4">
        {city.list.map((day: any) => (
          <Card
            className="bg-secondary rounded-2xl grid grid-cols-1 place-items-center md:grid-cols-2"
            key={day.dt}
          >
            <CardHeader>
              <Image
                src={"/partly-cloudy-day.png"}
                alt="partly-cloudy-image"
                width={100}
                height={100}
              />
            </CardHeader>
            <CardContent className="pt-4">
              {
                weekday[
                  new Date(
                    day.dt_txt.substring(0, day.dt_txt.indexOf(" "))
                  ).getDay()
                ]
              }
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WeekWeather;
