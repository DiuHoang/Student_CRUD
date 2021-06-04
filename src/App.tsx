import "./App.css";
import StudentList from "./components/StudentList";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={StudentList} exact></Route>
      </Switch>
    </Router>
  );
};

export default App;
