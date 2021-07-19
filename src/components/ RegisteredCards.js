import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';

import '../css/home.css';

const RegisteredCards = () => {
  const { saveHero, filterPower } = useContext(Context);

  return (
    <div>
      <h2 className="text-recommended">Heróis cadastrados</h2>
      <section className="container-cards">
        {saveHero && saveHero.filter((power) => power.powers.includes(filterPower))
          .map((hero) => (
            <div className="card-hero" key={hero.name}>
              <img className="img-card" src={hero.patch} alt={`Imagem de ${hero.name}`} />
              <p>{hero.name}</p>
              <p>{`Poder: ${hero.powers}`}</p>
              <Link
                className="btn-details"
                to={`/home/${hero.id}/detalhes/cadastrados`}
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
