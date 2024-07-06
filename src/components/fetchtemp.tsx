export async function FetchTemp(city: string) {
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
    { method: "GET" }
  );

  return (await response).json();
}
