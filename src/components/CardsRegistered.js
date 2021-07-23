import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiBatMask } from 'react-icons/gi';
import Context from '../context/context';

import '../css/cardStyle.css';

const CardsRegistered = () => {
  const { heroFirebase, handleGetHeroFirebase } = useContext(Context);

  useEffect(() => {
    handleGetHeroFirebase();
  }, []);

  return (
    <div className="movieRow">
      <h2 className="text-recommended">Heróis cadastrados</h2>
      <div className="container-msg-error">
        {!heroFirebase.length && (
        <p
          className="text-recommended"
        >
          Sem Heróis cadastrados, cadastre seu primeiro Herói.
          <GiBatMask className="icon-error" size={32} color="f2f2f2" />
        </p>
        )}
      </div>
      <div className="movieRow--listarea">
        {heroFirebase && heroFirebase.map((hero) => (
          <div className="movieRow--list" key={hero.id}>
            <div className="movieRow--item">
              <img
                className="img-card"
                src={hero.patch}
                alt={`Imagem de ${hero.name}`}
              />
              <p className="name-hero">{hero.name}</p>
              <Link
                to={`/home/${hero.id}/detalhes/cadastrados`}
                className="link-details"
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsRegistered;
