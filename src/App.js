import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MyProvider from './context/provider';
import Home from './pages/Home';
import Details from './pages/Details';
import './app.css';
import RegisterHero from './pages/RegisterHero';

function App() {
  return (
    <div>
      <MyProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id/detalhes" component={Details} />
          <Route exact path="/home/cadastro" component={RegisterHero} />
        </Switch>
      </MyProvider>
    </div>
  );
}

export default App;
