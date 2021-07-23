import React, { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Context from '../context/context';

import logo from '../images/logo.svg';

const Header = () => {
  const { handleOpenMenu } = useContext(Context);
  return (
    <div>
      <header className="container-user">
        <img className="logo-icon" src={logo} alt="Logotipo" />
        <button
          className="btn-mobile"
          type="button"
          onClick={handleOpenMenu}
        >
          <AiOutlineMenu size={30} color="#f2f2f2" />
        </button>
      </header>
      <div className="modal-menu" />
    </div>
  );
};

export default Header;
