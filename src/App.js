import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Covid from "./pages/About_Us";
import Navbar from "./components/Navbar";
import Climate from "./pages/Climate";
import Image from "./pages/Image";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/covid19" component={Covid} exact />
        <Route path="/climate" component={Climate} exact />
        <Route path="/image" component={Image} exact />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
