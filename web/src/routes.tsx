import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";


export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </BrowserRouter>
  );
}