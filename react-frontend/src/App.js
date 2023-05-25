import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListStudentsComponent from "./components/ListStudentsComponent";
import ViewStudentComponent from "./components/ViewStudentComponent";
import CreateStudentComponent from "./components/CreateStudentComponent";
import AuthentificationComponent from "./components/AuthentificationComponent";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListStudentsComponent}></Route>
            <Route path="/students" component={ListStudentsComponent}></Route>
            <Route
              path="/add-student/:id"
              component={CreateStudentComponent}
            ></Route>
            <Route
              path="/view-student/:id"
              component={ViewStudentComponent}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
