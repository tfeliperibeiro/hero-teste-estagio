import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

import '../css/home.css';

const RegisteredCards = () => {
  const { saveHero } = useContext(Context);

  return (
    <div>
      <h2 className="text-recommended">Heróis cadastrados</h2>
      <section className="container-cards">
        {saveHero && saveHero.map((hero) => (
          <div className="card-hero" key={hero.name}>
            <p>{hero.name}</p>
            <Link
              className="btn-details"
              to={`/home/${hero.id}/detalhes`}
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RegisteredCards;