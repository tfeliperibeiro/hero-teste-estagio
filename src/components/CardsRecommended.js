import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

import '../css/cardStyle.css';

// Componente que redereiza cards recomendados da API
const CardsRecommended = () => {
  const { dataApi } = useContext(Context);

  return (
    <div className="movieRow">
      <h2 className="text-recommended">Recomendados por nós</h2>
      <div className="movieRow--listarea">
        {dataApi && dataApi.filter((hero) => hero.alias !== '')
          .map((hero) => (
            <div className="movieRow--list" key={hero.id}>
              <div className="movieRow--item">
                <img
                  src={hero.img}
                  alt={hero.name}
                />
                <p className="name-hero">{hero.name}</p>
                <Link
                  to={`/home/${hero.id}/detalhes/recomendados`}
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

export default CardsRecommended;
