import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { AppBar, Toolbar, Typography } from "@mui/material";

const AppWrapper = () => {
  return (
    <Router>
      <div>
        {/* MUI AppBar/Header */}
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Your App Name
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Routes */}
        <Routes />
      </div>
    </Router>
  );
};

export default AppWrapper;
