interface WeatherData {
  temp: number;
  weather: {
    main: string;
    description: string;
    icon: string;
  };
}

export default WeatherData;
