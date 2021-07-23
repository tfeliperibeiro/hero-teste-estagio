import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/context';

import '../css/detailsRecommended.css';

const DetailsRecommended = ({ match: { params: { id } } }) => {
  const { dataApi } = useContext(Context);

  return (
    <div>
      <div className="container-card">
        {dataApi && dataApi.filter((hero) => hero.id === Number(id))
          .map((hero) => (
            <section className="card-hero" key={hero.id}>
              <h2>{hero.alias}</h2>
              <img
                className="img-hero"
                src={hero.img}
                alt={`Imagem ${hero.alias}`}
              />
              <p>{`Descrição: ${hero.description}`}</p>
              <ul>
                <li>{`Apelido: ${hero.alias}`}</li>
                <li>{`Nome: ${hero.name}`}</li>
                {hero.affiliation === '' ? <li>Equipe: Sem equipe</li>
                  : <li>{`Equipe: ${hero.affiliation}`}</li>}
              </ul>
              <div className="container-btn-details">
                <button
                  className="btn-details"
                  disabled
                  type="button"
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn-details"
                  disabled
                >
                  Excluir
                </button>
              </div>
              <p
                className="msg-edite"
              >
                Você não pode editar ou excluir este Herói.
              </p>
            </section>
          ))}
      </div>
    </div>
  );
};

DetailsRecommended.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default DetailsRecommended;
