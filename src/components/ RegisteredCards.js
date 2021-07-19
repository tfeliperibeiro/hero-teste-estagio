import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';
import imageHero from '../images/hero.png';

import '../css/home.css';

const RegisteredCards = () => {
  const { saveHero } = useContext(Context);

  return (
    <div>
      <h2 className="text-recommended">Heróis cadastrados</h2>
      <section className="container-cards">
        {saveHero.length ? saveHero.map((hero) => (
          <div className="card-hero" key={hero.name}>
            <img
              className="img-card"
              src={hero.patch}
              alt={`Imagem de ${hero.name}`}
            />
            <p>{hero.name}</p>
            <Link
              className="btn-details"
              to={`/home/${hero.id}/detalhes`}
            >
              Ver detalhes
            </Link>
          </div>
        )) : <img className="hero" src={imageHero} alt="hero" />}
      </section>
    </div>
  );
};

export default RegisteredCards;
