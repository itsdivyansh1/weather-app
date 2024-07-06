export async function FetchTemp(city: string) {
  const fiveday_response = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
    { method: "GET" }
  );

  return (await fiveday_response).json();
}
