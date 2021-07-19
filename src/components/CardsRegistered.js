import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

import '../css/cardStyle.css';

const CardsRegistered = () => {
  const { heroFirebase, handleGetHeroFirebase } = useContext(Context);

  useEffect(() => {
    handleGetHeroFirebase();
  }, []);

  return (
    <div>
      <h2 className="text-recommended">Heróis cadastrados</h2>
      <div className="container-cards">
        {heroFirebase && heroFirebase.map((hero) => (
          <div className="card-hero" key={hero.id}>
            <div className="card-row">
              <img
                className="img-card"
                src={hero.patch}
                alt={`Imagem de ${hero.name}`}
              />
            </div>
            <p>{hero.name}</p>
            <p>{hero.powers}</p>
            <Link
              className="btn-details"
              to={`/home/${hero.id}/detalhes/cadastrados`}
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsRegistered;
