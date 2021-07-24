import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import CardsRecommended from '../components/CardsRecommended';
import CardsRegistered from '../components/CardsRegistered';
import FeatureHero from '../components/FeatureHero';
import Menu from '../components/Menu';
import Context from '../context/context';

const Home = () => {
  const { openMenu, isLogged } = useContext(Context);
  return (
    <div>
      {!isLogged && <Redirect to="/" /> }
      {openMenu && <Menu />}
      <FeatureHero />
      <CardsRegistered />
      <CardsRecommended />
    </div>

  );
};

export default Home;
