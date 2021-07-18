import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const MyProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const handleInput = ({ target }) => setUser(target.value);

  const INITIAL_STATE = {
    user,
    handleInput,
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
