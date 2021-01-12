import React, { useEffect, useState } from "react";

import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import moment, { Moment } from "moment";

import { cToF, fToC } from "../../helpers";
import { ReminderProps, WeatherForecast } from "../../interfaces";
import { forecastApi } from "../../services";
import useStyles from "./styles";

interface ForecastProps {
  dateTime: Moment;
  coordinates: ReminderProps["city"]["coordinates"];
}

const Forecast: React.FC<ForecastProps> = ({ dateTime, coordinates }) => {
  const classes = useStyles();

  const [data, setData] = useState<WeatherForecast>();
  const [units, setUnit] = useState("imperial");
  const [temp, setTemp] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeUnit = () => {
    setUnit(units === "imperial" ? "metric" : "imperial");
  };

  useEffect(() => {
    setTemp(units === "imperial" ? cToF(temp) : fToC(temp));
    // eslint-disable-next-line
  }, [units]);

  useEffect(() => {
    if (dateTime && coordinates) {
      setIsLoading(true);

      forecastApi
        .getForecast(dateTime, {
          dt: moment(dateTime).unix(),
          lat: coordinates?.lat,
          lon: coordinates?.lng,
        })
        .then((result) => {
          setData(result);
          setTemp(result?.temp as number);
        })
        .finally(() => setIsLoading(false));
    }
  }, [dateTime, coordinates]);

  return (
    <Box className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Weather Forecast
      </Typography>
      {isLoading ? (
        <Box className={classes.loading}>
          <CircularProgress />
        </Box>
      ) : data ? (
        <Box>
          <Typography className={classes.temp}>
            {temp}
            <Tooltip title="Change unit">
              <IconButton onClick={handleChangeUnit}>
                {units === "imperial" ? "°F" : "°C"}
              </IconButton>
            </Tooltip>
          </Typography>

          <Box className={classes.detailsBox}>
            <Box>
              <Typography className={classes.weather}>
                {data.weather.main}
              </Typography>
              <Typography className={classes.description}>
                {data.weather.description}
              </Typography>
            </Box>
            <img src={data.weather.icon} alt="weather" />
          </Box>
        </Box>
      ) : (
        <Typography className={classes.noData}>
          No weather forecast data available
        </Typography>
      )}
    </Box>
  );
};

export default Forecast;
