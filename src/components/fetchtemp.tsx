export async function FetchTemp(city: string) {
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abcd&units=metric`,
    { method: "GET" }
  );

  return (await response).json();
}
