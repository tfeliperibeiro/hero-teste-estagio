import React from 'react';
import { Link } from 'react-router-dom';
import feature from '../images/feature.png';
import Header from './Header';

import '../css/featureHero.css';

// componente que renderiza a imagem do personagem na pagina home
const FeatureHero = () => (
  <section>
    <Header />
    <div className="container-feature">
      <img src={feature} alt="Imagem do Thor" />
      <div className="feature-register">
        <h2 className="text-register">Cadastre os melhores Heróis.</h2>
        <Link className="btn-register" to="/home/cadastro">Cadastrar Heróis</Link>
      </div>
    </div>
  </section>

);

export default FeatureHero;
