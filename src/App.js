import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MyProvider from './context/provider';
import Home from './pages/Home';
import './app.css';
import RegisterHero from './pages/RegisterHero';
import DetailsRecommended from './pages/DetailsRecommended';
import DetailsRegistered from './pages/DetailsRegistered';

function App() {
  return (
    <div>
      <MyProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/home/:id/detalhes/recomendados"
            component={DetailsRecommended}
          />
          <Route
            exact
            path="/home/:id/detalhes/cadastrados"
            component={DetailsRegistered}
          />
          <Route exact path="/home/cadastro" component={RegisterHero} />
        </Switch>
      </MyProvider>
    </div>
  );
}

export default App;
