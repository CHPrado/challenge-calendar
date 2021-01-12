import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import moment, { Moment } from "moment";

const API_KEY = "d047385c83f185f1bfc8ef53df359995";

interface ForecastResponseProps {
  daily: {
    dt: number;
    temp: { max: number };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  }[];
  hourly: {
    dt: number;
    temp: number;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  }[];
}

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const getIcon = (icon: string) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};

const formatForecastData = (
  date: Moment,
  resp: AxiosResponse<ForecastResponseProps>
) => {
  const result = resp.data;
  let forecast;
  let i;

  for (i = 0; i < result.hourly.length; i++) {
    if (moment.unix(result.hourly[i].dt).isSame(date, "hour")) {
      forecast = {
        dt: result.hourly[i].dt,
        temp: result.hourly[i].temp,
        weather: {
          main: result.hourly[i].weather[0].main,
          description: result.hourly[i].weather[0].description,
          icon: getIcon(result.hourly[i].weather[0].icon),
        },
      };

      break;
    }
  }

  if (!forecast) {
    for (i = 0; i < result.daily.length; i++) {
      if (moment.unix(result.daily[i].dt).isSame(date, "day")) {
        forecast = {
          dt: result.daily[i].dt,
          temp: result.daily[i].temp.max,
          weather: {
            main: result.daily[i].weather[0].main,
            description: result.daily[i].weather[0].description,
            icon: getIcon(result.daily[i].weather[0].icon),
          },
        };

        break;
      }
    }
  }

  return forecast;
};

const previous = async (date: Moment, data: AxiosRequestConfig["params"]) => {
  const params = { ...data, units: "imperial", appId: API_KEY };

  return await api
    .get<ForecastResponseProps>("onecall/timemachine", { params })
    .then((resp) => {
      return formatForecastData(date, resp);
    });
};

const next = async (date: Moment, data: AxiosRequestConfig["params"]) => {
  const params = {
    ...data,
    units: "imperial",
    appId: API_KEY,
  };

  return await api
    .get<ForecastResponseProps>("onecall", { params })
    .then((resp) => {
      return formatForecastData(date, resp);
    });
};

const forecastApi = {
  async getForecast(date: Moment, data: AxiosRequestConfig["params"]) {
    if (date.isBefore(moment(), "hour")) {
      return await previous(date, data);
    } else {
      return await next(date, data);
    }
  },
};

export default forecastApi;
