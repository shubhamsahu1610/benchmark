import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const AppWrapper = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default AppWrapper;
