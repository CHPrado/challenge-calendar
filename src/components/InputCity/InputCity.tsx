import React, { useState } from "react";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import {
  Box,
  InputAdornment,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import theme from "../../theme";
import useStyles from "./styles";

interface InputCityProps {
  value: string | undefined;
  onSelect: (
    description: string,
    coordinates: google.maps.LatLngLiteral
  ) => void;
}

const InputCity: React.FC<InputCityProps> = ({ value, onSelect }) => {
  const classes = useStyles();

  const [address, setAddress] = useState(value || "");

  const handleSelect = async (value: string) => {
    setAddress(value);

    const result = await geocodeByAddress(value);
    const coordinates = await getLatLng(result[0]);

    onSelect(value, coordinates);
  };

  return (
    <PlacesAutoComplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Box className={classes.root}>
          <TextField
            placeholder="Add city"
            fullWidth
            {...getInputProps()}
            InputProps={
              loading
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <CircularProgress size={"1.5rem"} />
                      </InputAdornment>
                    ),
                  }
                : undefined
            }
          />
          {suggestions.length ? (
            <Box className={classes.suggestionsBox}>
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active
                    ? theme.palette.primary.light
                    : theme.palette.background.default,
                };

                return (
                  <Box
                    className={classes.suggestion}
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    <LocationOnIcon className={classes.icon} />
                    <Box>
                      <Typography className={classes.cityName}>
                        {suggestion.description.split(/,(.+)/)[0]}
                      </Typography>
                      <Typography className={classes.cityDetails}>
                        {suggestion.description.split(/,(.+)/)[1]}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          ) : (
            <></>
          )}
        </Box>
      )}
    </PlacesAutoComplete>
  );
};

export default InputCity;
