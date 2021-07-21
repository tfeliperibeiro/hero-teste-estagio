import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Context from '../context/context';
import Header from '../components/Header';

import '../css/detailsRegistered.css';

const DetailsRegistered = ({ match: { params: { id } } }) => {
  const {
    heroFirebase,
    handleGetHeroFirebase,
    handleDeleteHeroFirebase,
    redirectHome,
  } = useContext(Context);

  useEffect(() => {
    handleGetHeroFirebase();
  }, []);

  return (
    <div>
      <Header />
      <div className="container-card">
        {redirectHome && <Redirect to="/home" />}
        {heroFirebase && heroFirebase.filter((hero) => hero.id === id)
          .map((hero) => (
            <section className="cards-hero" key={hero.id}>
              <img
                src={hero.patch}
                alt={`Imagem ${hero.name}`}
                className="img-hero"
              />
              <p>{`Descrição: ${hero.description}`}</p>
              <ul>
                <li>{`Nome: ${hero.name}`}</li>
                <li>{`Poder: ${hero.powers}`}</li>
              </ul>
              <div className="container-btn-registered">
                <button
                  className="btn-details-registered"
                  type="button"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteHeroFirebase(id)}
                  type="button"
                  className="btn-details-registered"
                >
                  Excluir
                </button>
              </div>
            </section>
          ))}
      </div>
    </div>
  );
};

DetailsRegistered.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default DetailsRegistered;
