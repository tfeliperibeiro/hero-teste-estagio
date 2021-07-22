import React, { useContext } from 'react';
import '../css/login.css';
import { Link, Redirect } from 'react-router-dom';
import avatar from '../images/avatar.png';
import context from '../context/context';

const Login = () => {
  const {
    handleInputLoginUser,
    handleLoginUser,
    isLogged,
  } = useContext(context);

  return (
    <main>
      { isLogged && <Redirect to="/home" /> }
      <div className="container-login">
        <section className="text-main">
          <div>
            <h2>A melhor plataforma de</h2>
            <h2 className="text-hero">HERÓIS.</h2>
          </div>
          <input
            onChange={handleInputLoginUser}
            placeholder="Entre com seu email"
            className="input-login"
            type="text"
            name="email"
          />
          <input
            onChange={handleInputLoginUser}
            placeholder="Entre com sua senha"
            className="input-login"
            type="password"
            name="password"
          />
          <button
            className="btn-login"
            type="button"
            onClick={handleLoginUser}
          >
            Entrar
          </button>
          <Link to="/register" className="link-register"> Ou cadastre-se.</Link>
        </section>
        <img className="avatar" src={avatar} alt="Imagem Heróis" />
      </div>
    </main>

  );
};

export default Login;
