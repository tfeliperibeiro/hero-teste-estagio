import React, { useContext, useEffect } from 'react';
import Context from '../context/context';

import '../css/cardStyle.css';

const CardsRegistered = () => {
  const { heroFirebase, handleGetHeroFirebase } = useContext(Context);

  useEffect(() => {
    handleGetHeroFirebase();
  }, []);

  return (
    <div>
      <h2 className="text-recommended">Filmes cadastrados</h2>
      <div className="movieRow--listarea">
        {heroFirebase && heroFirebase.map((hero) => (
          <div className="movieRow--list" key={hero.id}>
            <img
              className="img-card"
              src={hero.patch}
              alt={`Imagem de ${hero.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsRegistered;
