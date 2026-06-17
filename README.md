# Weather Dashboard

A responsive React weather dashboard powered by the [OpenWeather API](https://openweathermap.org/api).

## Features

- Search any city by name
- Current weather with temperature, humidity, and wind
- 5-day forecast with daily highlights
- Mobile-friendly responsive layout

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/varshith-26/weather-dashboard.git
   cd weather-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a free API key at [OpenWeather](https://openweathermap.org/api), then copy the example env file:

   ```bash
   cp .env.example .env
   ```

4. Add your API key to `.env`:

   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

5. Start the dev server:

   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## Tech Stack

- React
- Vite
- OpenWeather API
