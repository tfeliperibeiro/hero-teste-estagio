import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import { BsPeopleCircle } from 'react-icons/bs';
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
      <div className="container-logoff">
        <BsPeopleCircle
          className="icon-user"
          size={50}
          color="f2f2f2"
        />
        {userData !== ''
          ? <p className="text-logoff">{userData}</p> : null}
        <button
          onClick={handleLogout}
          type="button"
          className="btn-logoff"
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default Menu;
