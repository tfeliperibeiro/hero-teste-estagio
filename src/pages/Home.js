import React, { useContext } from 'react';
import Context from '../context/context';

const Home = () => {
  const { user } = useContext(Context);
  return (
    <div>
      <p>{user}</p>
    </div>
  );
};

export default Home;
