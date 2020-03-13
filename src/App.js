import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "./component/grid/Grid";
import Data from "./component/data/Data";
import { OffsetContextProvider } from "./OffsetContext";

function App() {
  return (
    <OffsetContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Grid} />
          <Route exact path="/pokemon/:id" component={Data} />
        </Switch>
      </Router>
    </OffsetContextProvider>
  );
}

export default App;
