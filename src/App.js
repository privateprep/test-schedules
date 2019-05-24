import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Pin } from "./pin.svg";
import { locations } from "./lib";

const Location = lazy(() => import("./Location"));

const Home = _ => {
  useEffect(() => {
    document.title = "Test Schedule - Private Prep";
  }, []);

  return (
    <main className="Home">
      <h1>Select Location</h1>
      <ul className="locations__list">
        {locations.map(location => (
          <li className="locations__list__item">
            <Link to={`/locations/${location.slug}`} className="location-link">
              <Pin className="pin" />
              <h3>{location.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

const Menu = _ => (
  <header className="Menu">
    <Link to="/">
      <Logo className="Logo" />
    </Link>
    <h1 className="title">Test Schedule</h1>
  </header>
);

const App = _ => (
  <div className="App">
    <Menu />
    <div className="App-body">
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/locations/:slug" component={Location} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </div>
  </div>
);

export default App;
