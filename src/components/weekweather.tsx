import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { SunIcon } from "lucide-react";

const week = [
  {
    day: "Sunday",
  },

  {
    day: "Sunday",
  },

  {
    day: "Monday",
  },

  {
    day: "Tuesday",
  },

  {
    day: "Thursday",
  },

  {
    day: "Friday",
  },

  {
    day: "Saturday",
  },
];

function WeekWeather() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold tracking-tight">Week</h2>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4">
        {week.map((day, index) => (
          <Card className="bg-secondary rounded-2xl" key={index}>
            <CardHeader>
              <SunIcon className="w-16 h-16" />
            </CardHeader>
            <CardContent className="pt-4">{day.day}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WeekWeather;
