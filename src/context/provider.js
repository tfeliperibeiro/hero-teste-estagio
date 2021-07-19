import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const MyProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);
  const [filterPower, setFilterPower] = useState('');
  const [getRegister, setGetRegister] = useState({
    id: 0,
    name: '',
    description: '',
    powers: '',
    patch: '',
  });
  const [saveHero, setSaveHero] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://xmenapiheroku.herokuapp.com/api/characters');
    const responseJson = await response.json();
    setData(responseJson.results);
  };

  const handleSaveHero = () => {
    setSaveHero((oldState) => [...oldState, getRegister]);
    setGetRegister((oldState) => ({
      ...oldState,
      id: oldState.id + 1,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInput = ({ target }) => {
    setUser(target.value);
  };

  const handleFilterPower = ({ target }) => {
    setFilterPower(target.value);
  };

  const handleRegisterCards = ({ target }) => (
    setGetRegister((oldState) => ({ ...oldState, [target.id]: target.value }))
  );

  const INITIAL_STATE = {
    user,
    handleInput,
    data,
    fetchData,
    handleRegisterCards,
    handleSaveHero,
    saveHero,
    filterPower,
    handleFilterPower,
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
