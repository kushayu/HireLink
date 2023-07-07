import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import App from "./App.js";
import Home from "./Home.js";
import Register from "./Register.js";
import UserLogin from "./UserLogin.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/userLogin">
        <UserLogin />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  </BrowserRouter>
);
