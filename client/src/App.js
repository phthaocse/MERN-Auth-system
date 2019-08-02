import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';





class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        
          <Navbar />
          <main className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </main>
        
      </Router>
      </Provider>
    );
  }
}

export default App;
