import React from 'react';
import CardsRecommended from '../components/CardsRecommended';
import CardsRegistered from '../components/CardsRegistered';
import FeatureHero from '../components/FeatureHero';

const Home = () => (
  <div>
    <FeatureHero />
    <CardsRegistered />
    <CardsRecommended />
  </div>

);

export default Home;
