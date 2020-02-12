
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from "react";
import './App.css';

import HomeContainer from "./containers/HomeContainer";
import Home from "./components/core/Home";
import Config from "./Config";
import Global from "./Global"

import {
  // BrwserRouter as Router,
  Switch,
  // Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

   render() {
      return (
        <Router>
          <div>
           
              <ul>
                <li>
                  <Link to="/">Home Container</Link>
                </li>
              </ul>
           
            <Switch>
              <Route path="/">
                <HomeContainer/>
              </Route>
              
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  export default App;