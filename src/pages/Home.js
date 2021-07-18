import React, { useContext } from 'react';
import Header from '../components/Header';
import Context from '../context/context';

const Home = () => {
  const { data } = useContext(Context);

  return (
    <div>
      <Header />
      <h2>Recomendados por nós</h2>
      <section>
        {data.map((hero) => (
          <div key={hero.name}>
            <p>{hero.name}</p>
            <img src={hero.img} alt={hero.name} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
