"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function ShowCalendar({ props }: any) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  React.useEffect(() => {
    setDate(date);
  }, [date]);

  return (
    <Calendar
      {...props}
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
