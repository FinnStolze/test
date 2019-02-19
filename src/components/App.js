import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import SecondPage from "../components/pages/SecondPage";

const App = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Route path={"/"} exact component={Home} />
          <Route path={"/secondpage"} component={SecondPage} />
        </div>
      </HashRouter>
    </div>
  );
};
export default App;
