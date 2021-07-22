import React, { useContext } from 'react';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Context from '../context/context';

import logo from '../images/logo.svg';
import icon from '../images/user.svg';

const Header = () => {
  const {
    userLogged,
  } = useContext(Context);
  return (
    <header className="container-user">
      <img className="logo-icon" src={logo} alt="Logotipo" />
      <div className="container-icon-user">
        <p>{userLogged}</p>
        <img className="icon-user" src={icon} alt="Icone do usuario" />
        <button
          className="btn-logout"
          type="button"
        >
          <BsBoxArrowInLeft size={26} color="#f2f2f2" />
          Sair
        </button>
      </div>
    </header>
  );
};

export default Header;
