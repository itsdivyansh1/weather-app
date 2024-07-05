import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SunIcon } from "lucide-react";
import EarthModel from "./earthmodel";

function MainWeather() {
  return (
    <Card className="w-full bg-secondary rounded-2xl flex justify-between items-center px-8 mt-4">
      <CardHeader>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-muted-foreground lg:text-5xl">
          Mumbai
        </h1>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          India
        </h3>

        <CardTitle className="text-[4rem]">24</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {/* <SunIcon className="w-16 h-16" /> */}
        <EarthModel />
      </CardContent>
    </Card>
  );
}

export default MainWeather;
