import { ShowCalendar } from "@/components/calendar";
import Header from "@/components/header";
import MainWeather from "@/components/mainweather";
import TodaysHighlight from "@/components/todays-highlight";

import * as React from "react";
import Today from "@/components/today";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default async function Home() {
  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-4">
      <div className="md:col-span-3 col-span-1 m-2 md:m-8">
        <Header
          title="Weather App"
          description="Know your current Weather"
          input={
            <Input
              placeholder="Search your city"
              className="border-2 border-gray-400 focus-visible:ring-0 hidden md:block"
            />
          }
          icon={<SearchIcon className="hidden md:block" />}
        />

        <MainWeather />
        <Today cityinput="Mumbai" />

        <TodaysHighlight />
      </div>
      <div className="col-span-1 m-2 hidden md:m-8 lg:block">
        <Header title="Calendar" />
        <ShowCalendar />
      </div>
    </main>
  );
}
