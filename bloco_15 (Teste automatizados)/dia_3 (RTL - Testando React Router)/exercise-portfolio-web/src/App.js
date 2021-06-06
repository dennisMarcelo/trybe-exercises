import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>My Portfolio </h1>
      </header>
      <menu>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/projects">Projetos</Link></div>
        <div><Link to="/about">Sobre</Link></div>
        <div><Link to="/contact">Contato</Link></div>
      </menu>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
         
      </Switch>
    </div>
  );
}

export default App;
