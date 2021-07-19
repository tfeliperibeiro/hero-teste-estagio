import React from 'react';
import CardsRecommended from '../components/CardsRecommended';
import CardsRegistered from '../components/CardsRegistered';
import Header from '../components/Header';

const Home = () => (
  <div>
    <Header />
    <CardsRegistered />
    <CardsRecommended />
  </div>

);

export default Home;
