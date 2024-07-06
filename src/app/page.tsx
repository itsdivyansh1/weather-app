import { ShowCalendar } from "@/components/calendar";
import Header from "@/components/header";
import MainWeather from "@/components/mainweather";
import TodaysHighlight from "@/components/todays-highlight";
import WeekWeather from "@/components/weekweather";

import { SearchIcon } from "lucide-react";
import * as React from "react";

export default async function Home({ params }: any) {
  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-4">
      <div className="md:col-span-3 col-span-1 m-2 md:m-8">
        <Header
          title="Weather App"
          description="Know your current Weather"
          icon={<SearchIcon className="hidden md:block" />}
        />

        <MainWeather />
        <WeekWeather />

        <TodaysHighlight />
      </div>
      <div className="col-span-1 m-2 hidden md:m-8 lg:block">
        <Header title="Calendar" />
        <ShowCalendar />
      </div>
    </main>
  );
}
