import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const MyProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://xmenapiheroku.herokuapp.com/api/characters');
    const responseJson = await response.json();
    setData(responseJson.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInput = ({ target }) => setUser(target.value);

  const INITIAL_STATE = {
    user,
    handleInput,
    data,
    fetchData,
  };

  return (
    <div>
      <Context.Provider value={INITIAL_STATE}>
        {children}
      </Context.Provider>
    </div>
  );
};

MyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MyProvider;
