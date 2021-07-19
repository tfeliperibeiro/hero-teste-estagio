import React, { useContext } from 'react';
import Context from '../context/context';

import '../css/cardStyle.css';

const CardsRecommended = () => {
  const { dataApi } = useContext(Context);

  return (
    <div className="movieRow">
      <div className="movieRow--listarea">
        {dataApi && dataApi.filter((hero) => hero.alias !== '')
          .map((hero) => (
            <div className="movieRow--list" key={hero.id}>
              <div className="movieRow--item">
                <img
                  src={hero.img}
                  alt={hero.name}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardsRecommended;
