import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { FetchTemp } from "./fiveday_res";

interface WeatherItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
}

interface WeatherData {
  temp: number;
  icon: string;
  description: string;
}

interface CityData {
  list: WeatherItem[];
}

interface WeekDataType {
  [key: string]: WeatherData;
}

async function WeekWeather({ cityinput }: { cityinput: string }) {
  const city: CityData = await FetchTemp(cityinput);
  const weekday: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weekData: WeekDataType = {};

  city.list.forEach((item: WeatherItem) => {
    const date = new Date(item.dt * 1000);
    const day = weekday[date.getDay()];
    const hour = date.getHours();

    // Prefer midday temperatures (around 12:00)
    if (!weekData[day] || (hour >= 11 && hour <= 13)) {
      weekData[day] = {
        temp: item.main.temp,
        icon: item.weather[0].icon,
        description: item.weather[0].description,
      };
    }
  });

  console.log("Week Data:", weekData); // Debug log

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold tracking-tight">Week</h2>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4">
        {Object.entries(weekData).map(([day, data]) => {
          const iconUrl = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;

          console.log(
            `Day: ${day}, Temp: ${data.temp}, Icon: ${data.icon}, Url: ${iconUrl}`
          ); // Debug log

          return (
            <Card
              className="bg-secondary rounded-2xl grid grid-cols-1 place-items-center md:grid-cols-2"
              key={day}
            >
              <CardHeader>
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <Image
                    src={iconUrl}
                    alt={data.description}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p>{day}</p>
                <p>{data.temp.toFixed(1)}°C</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default WeekWeather;
