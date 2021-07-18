import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';
import userIcon from '../images/user.svg';
import logo from '../images/logo.svg';
import '../css/header.css';

const Header = () => {
  const { user } = useContext(Context);
  return (
    <div className="container-user">
      <Link to="/home"><img className="logo-icon" src={logo} alt="Icon User" /></Link>
      <div className="user-login">
        <p className="user-text">{user}</p>
        <img className="icon-user" src={userIcon} alt="Icon User" />
      </div>
    </div>
  );
};

export default Header;
