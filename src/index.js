import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./styles.css";
import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Lander />
        </Route>
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

function Lander() {
  return (
    <>
      <span id="credits">
        Built by the <a href="https://majel.me">majel.me</a> team.
      </span>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

serviceWorker.register();
