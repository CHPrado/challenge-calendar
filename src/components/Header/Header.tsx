import React from "react";

import { Box, Typography } from "@material-ui/core";

import useStyles from "./styles";

interface HeaderProps {
  selectedDate: string;
}

const Header: React.FC<HeaderProps> = ({ selectedDate }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.headerContainer}>
        <Typography variant="h3" className={classes.title}>
          Calendar
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          {selectedDate}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
