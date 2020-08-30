import React from "react";
import "antd/dist/antd.css";
import Home from "./containers/newsContainer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/category/:id?" component={Home} />
    </Switch>
  );
}

export default App;
