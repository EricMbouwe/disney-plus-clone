import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
