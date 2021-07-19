import React, { useContext } from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png';
import context from '../context/context';

const Login = () => {
  const { handleInput } = useContext(context);
  return (
    <main>
      <div className="container-login">
        <section className="text-main">
          <div>
            <h2>A melhor plataforma de</h2>
            <h2 className="text-hero">HERÓIS.</h2>
          </div>
          <input
            onChange={handleInput}
            placeholder="Entre com seu nome"
            className="input-login"
            type="text"
            name="name"
          />
          <input
            onChange={handleInput}
            placeholder="Entre com seu email"
            className="input-login"
            type="email"
            name="email"
          />
          <Link
            to="/home"
            className="btn-login"
            type="button"
          >
            Entrar
          </Link>
        </section>
        <img className="avatar" src={avatar} alt="Imagem Harry Potter" />
      </div>
    </main>

  );
};

export default Login;
