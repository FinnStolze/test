import React from "react";
import { Router, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import history from "../history";
import SecondPage from "../components/pages/SecondPage";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path={"/"} exact component={Home} />
          <Route path={"/secondpage"} component={SecondPage} />
        </div>
      </Router>
    </div>
  );
};
export default App;
