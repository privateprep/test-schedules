import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ReactComponent as Logo } from "./logo.svg";

const Location = lazy(() => import("./Location"));

const Menu = _ => (
  <header className="Menu">
    <Logo className="Logo" />
    <nav />
  </header>
);

const App = _ => (
  <div className="App">
    <Menu />
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path="/locations/:slug" component={Location} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
