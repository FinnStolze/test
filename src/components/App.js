import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path={"/"} component={Home} />
        </div>
      </Router>
    </div>
  );
};
export default App;
