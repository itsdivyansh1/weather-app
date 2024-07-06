export async function WeatherResponse(city: string) {
  const weather_response = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  );

  return (await weather_response).json();
}
