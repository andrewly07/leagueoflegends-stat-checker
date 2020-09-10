import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import ErrorPage from "./pages/404";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}>
            <HomePage />
          </Route>
          <Route path="/contact" component={ContactPage}>
            <ContactPage />
          </Route>
          <Route path="/404" component={ErrorPage}>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
