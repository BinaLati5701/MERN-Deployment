import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakout from './games/breakout';

function App() {
  return (
    <Router>
      <div>
        <h1>Aladdin</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aladdin">Play Aladdin</Link>
          </li>          
        </ul>
        

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <header className="App-header"/>
          </Route>
          <Route path="/aladdin">
            <Breakout/>
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
