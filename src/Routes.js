// create a router in src/routes.js:
// // src/routes.js
import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function Routes() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    // ...
  ]);
  return routes;
}

export default Routes;
