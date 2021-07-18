import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Context from '../context/context';
import '../css/home.css';

const Home = () => {
  const { data } = useContext(Context);

  return (
    <div>
      <Header />
      <h2 className="text-recommended">Recomendados por nós</h2>
      <section className="container-cards">
        {data && data.map((hero) => (
          <div className="card-hero" key={hero.id}>
            <img className="img-card" src={hero.img} alt={hero.name} />
            <p>{hero.alias}</p>
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

export default Home;
