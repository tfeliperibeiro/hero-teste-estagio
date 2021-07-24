import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import Context from '../context/context';

const Menu = () => {
  const {
    handleOpenMenu, handleLogout, userData,
  } = useContext(Context);
  return (
    <div className="menu">

      <div className="container-btn-close">
        <button
          onClick={handleOpenMenu}
          type="button"
          className="btn-close"
        >
          <FiX
            className="icon-close"
            size={40}
            color="#F21B2D"
          />
        </button>
      </div>
      {userData !== ''
        ? <p className="text-recommended">{userData}</p> : null}
      <button onClick={handleLogout} type="button">Sair</button>
    </div>
  );
};

export default Menu;
