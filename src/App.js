import React from "react";
import Home from "./Home/Home";
import AddMeeting from "./Addmeeting/AddMeeting";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/addMeeting" component={AddMeeting} exact={true} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
