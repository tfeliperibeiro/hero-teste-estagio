import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import MyProvider from './context/provider';
import './app.css';

function App() {
  return (
    <div>
      <MyProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </MyProvider>
    </div>
  );
}

export default App;
