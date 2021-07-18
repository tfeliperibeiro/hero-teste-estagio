import React from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.svg';

const Login = () => (
  <main className="container-login">
    <section className="text-main">
      <h2>A melhor plataforma de</h2>
      <h2 className="text-hero">HERÓIS.</h2>
      <input placeholder="Entre com seu nome" className="input-login" type="text" />
      <Link to="/home" className="btn-login" type="button">Entrar</Link>
    </section>
    <img className="avatar" src={avatar} alt="Imagem Harry Potter" />
  </main>
);

export default Login;
