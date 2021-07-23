import React, { useContext } from 'react';
import CardsRecommended from '../components/CardsRecommended';
import CardsRegistered from '../components/CardsRegistered';
import FeatureHero from '../components/FeatureHero';
import Menu from '../components/Menu';
import Context from '../context/context';

const Home = () => {
  const { openMenu } = useContext(Context);
  return (
    <div>
      {openMenu && <Menu />}
      <FeatureHero />
      <CardsRegistered />
      <CardsRecommended />
    </div>

  );
};

export default Home;
