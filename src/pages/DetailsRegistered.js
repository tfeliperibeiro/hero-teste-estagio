import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Context from '../context/context';

import '../css/detailsRegistered.css';
import Modal from '../components/Modal';

// Pagina de detalhes dos cards registrados pelo usuario
const DetailsRegistered = ({ match: { params: { id } } }) => {
  const {
    heroFirebase,
    handleGetHeroFirebase,
    handleDeleteHeroFirebase,
    redirectHome,
    handleOpenModal,
    openModal,
    isEdited,
  } = useContext(Context);

  useEffect(() => {
    handleGetHeroFirebase();
  }, [isEdited]);

  return (
    <div>
      {openModal && <Modal id={id} />}
      <div className="container-card">
        {redirectHome && <Redirect to="/home" />}
        {heroFirebase && heroFirebase.filter((hero) => hero.id === id)
          .map((hero) => (
            <section key={hero.id}>
              <h2>{hero.name}</h2>
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
                  onClick={handleOpenModal}
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
