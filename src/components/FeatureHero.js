import React from 'react';
import { Link } from 'react-router-dom';
import feature from '../images/feature.png';

import '../css/featureHero.css';

const FeatureHero = () => (
  <div className="container-feature">
    <img src={feature} alt="Imagem do Thor" />
    <Link className="btn-register" to="/home/cadastro">Cadastrar Heróis</Link>
  </div>

);

export default FeatureHero;
