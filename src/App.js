import React from "react";
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import Navbar from"./Components/layout/navbar";
import Alert from"./Components/layout/Alert";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";
import User from "./Components/users/User";
import "./App.css";


const App =()=>{
    return (
      <GithubState>
      <AlertState>
      <Router>
      <div>
        <Navbar/>
        <div className="container">
          <Alert/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/about" component={About}/>
           <Route exact path="/user/:login" component={User}/>
           <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  }
  




export default App;
