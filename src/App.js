import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Nav from "./components/nav.js";
import './style/main.scss';
//! Components 
import Todo from "./components/todo_content.js";

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Todo}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
