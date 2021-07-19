import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

import '../css/home.css';

const CardsRecommended = () => {
  const { data } = useContext(Context);

  return (
    <div>
      <h2 className="text-recommended">Recomendados por nós</h2>
      <section className="container-cards">
        {data && data.filter((hero) => hero.alias !== '')
          .map((hero) => (
            <div className="card-hero" key={hero.id}>
              <img className="img-card" src={hero.img} alt={hero.name} />
              <p>{hero.alias}</p>
              <Link
                className="btn-details"
                to={`/home/${hero.id}/detalhes/recomendados`}
              >
                Ver detalhes
              </Link>
            </div>
          ))}
      </section>
    </div>
  );
};

export default CardsRecommended;
