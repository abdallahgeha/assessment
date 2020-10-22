import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";
import New from './pages/New'

import "./fontawesomeIcon";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/new">
            <New update={false} />
          </Route>
          <Route exact path="/edit/:id">
            <New update={true} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
