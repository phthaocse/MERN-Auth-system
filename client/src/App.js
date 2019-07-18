import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Register from "./components/register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <main className="container">
            <Route exact path="/" component={Landing} />
            <Route path="/register" component={Register} />
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
