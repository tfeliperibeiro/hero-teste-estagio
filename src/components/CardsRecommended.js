import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

import '../css/cardStyle.css';

const CardsRecommended = () => {
  const { dataApi } = useContext(Context);

  return (
    <div>
      <h2 className="text-recommended">Recomendados por nós</h2>
      <div className="container-cards">
        {dataApi && dataApi.filter((hero) => hero.alias !== '')
          .map((hero) => (
            <div className="card-hero" key={hero.id}>
              <div className="card-row">
                <img className="img-card" src={hero.img} alt={hero.name} />
              </div>
              <p>{hero.alias}</p>
              <Link
                className="btn-details"
                to={`/home/${hero.id}/detalhes/recomendados`}
              >
                Ver detalhes
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardsRecommended;
