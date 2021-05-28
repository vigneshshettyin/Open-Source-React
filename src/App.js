import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Covid from "./pages/Covid-19 Tracker App/Covid-19_Tracker";
import Climate from "./pages/Climate App/Climate";
import Image from "./pages/Image Live Search/Image";
import Vaccine from "./pages/Covid-19 Vaccine/Covid-19-Vac";
import Ip_Info from "./pages/IP App/Ip_Info";
import Discord from "./pages/Discord Webhook/Discord";
import Quotes from "./pages/Quotes/Quotes";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/covid19" component={Covid} exact />
        <Route path="/climate" component={Climate} exact />
        <Route path="/image" component={Image} exact />
        <Route path="/vaccine-covid-19" component={Vaccine} exact />
        <Route path="/ip-info" component={Ip_Info} exact />
        <Route path="/discord-webhook" component={Discord} exact />
        <Route path="/quotes" component={Quotes} exact />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
