import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node'; // Use 'msw/node' instead of 'msw/native'

const mockWeatherResponse = {
  name: "London",
  main: { temp: 22 },
  weather: [{ description: "Clear Sky" }],
};

export const server = setupServer(
  http.get('https://api.openweathermap.org/data/2.5/weather', async () => {
    return HttpResponse.json(mockWeatherResponse);
  })
);
