import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route  exact path="/register" component={Register} />
      <Route  exact path="/main" component={Main} />
      <Route  exact path="/profile" component={Profile} />
    </BrowserRouter>
  );
}