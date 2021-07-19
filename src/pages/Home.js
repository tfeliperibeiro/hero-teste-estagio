import React from 'react';
import RegisteredCards from '../components/ RegisteredCards';
import CardsRecommended from '../components/CardsRecommended';
import Header from '../components/Header';

const Home = () => (
  <div>
    <Header />
    <RegisteredCards />
    <CardsRecommended />
  </div>
);

export default Home;
