import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/context';

const DetailsRecommended = ({ match: { params: { id } } }) => {
  const { dataApi } = useContext(Context);

  return (
    <div>
      {dataApi && dataApi.filter((hero) => hero.id === Number(id))
        .map((hero) => (
          <section key={hero.id}>
            <img src={hero.img} alt={`Imagem ${hero.alias}`} />
            <p>{`Descrição: ${hero.description}`}</p>
            <ul>
              <li>{`Apelido: ${hero.alias}`}</li>
              <li>{`Nome: ${hero.name}`}</li>
              {hero.affiliation === '' ? <li>Equipe: Sem equipe</li>
                : <li>{`Equipe: ${hero.affiliation}`}</li>}
            </ul>
            <button disabled type="button">Editar</button>
          </section>
        ))}
    </div>
  );
};

DetailsRecommended.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default DetailsRecommended;
