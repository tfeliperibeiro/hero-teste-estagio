import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/context';

const DetailsRegistered = ({ match: { params: { id } } }) => {
  const { saveHero } = useContext(Context);

  return (
    <div>
      {saveHero && saveHero.filter((hero) => hero.id === Number(id))
        .map((hero) => (
          <section key={hero.id}>
            <img src={hero.patch} alt={`Imagem ${hero.name}`} />
            <p>{`Nome: ${hero.name}`}</p>
            <p>{`Poder: ${hero.powers}`}</p>
            <p>{`Descrição: ${hero.description}`}</p>
            <button type="button">Editar</button>
          </section>
        ))}
    </div>
  );
};

DetailsRegistered.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default DetailsRegistered;
