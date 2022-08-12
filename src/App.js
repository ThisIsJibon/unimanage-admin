import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Course from "./pages/Course";
import Result from "./pages/Result";
import Enrollment from "./pages/Enrollment";
import Department from "./pages/Department"
import Classroom from "./pages/Classroom";
import Section from "./pages/Section"

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/course" component={Course} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/result" component={Result} />
          <Route path="/enrollment" component={Enrollment} />
          <Route path="/department" component={Department} />
          <Route path="/classroom" component={Classroom} />
          <Route path="/section" component={Section} />
        </Switch>
      </Router>
    </div>
  );
}
