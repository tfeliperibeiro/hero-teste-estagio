import React, { useContext } from 'react';
import Context from '../context/context';

import logo from '../images/logo.svg';
import icon from '../images/user.svg';

const Header = () => {
  const { userLogin } = useContext(Context);
  return (
    <header className="container-user">
      <img className="logo-icon" src={logo} alt="Logotipo" />
      <div className="container-icon-user">
        <p>{userLogin.name}</p>
        <img className="icon-user" src={icon} alt="Icone do usuario" />
      </div>
    </header>
  );
};

export default Header;
