import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/context';

const Details = ({ match: { params: { id } } }) => {
  const { data } = useContext(Context);

  return (
    <div>
      {data.filter((hero) => hero.id === Number(id))
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
            <button type="button">Editar</button>
          </section>
        ))}
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Details;
