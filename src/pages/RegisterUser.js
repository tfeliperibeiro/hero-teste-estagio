import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context/context';
import '../css/login.css';

// Pagina de cadastro de um novo usuario com email e senha
const RegisterUser = () => {
  const {
    handleInputRegisterUser,
    handleRegisterNewUser,
    isRegistered,
  } = useContext(Context);
  return (
    <main>
      <div className="container-login">
        {isRegistered && <Redirect to="/" />}
        <section className="text-main">
          <div>
            <h2>Cadastre-se na melhor plataforma de</h2>
            <h2 className="text-hero">HERÓIS.</h2>
          </div>
          <input
            placeholder="Email"
            className="input-login"
            type="email"
            name="email"
            onChange={handleInputRegisterUser}
            autoComplete="off"
          />
          <input
            placeholder="Senha"
            className="input-login"
            type="password"
            name="password"
            onChange={handleInputRegisterUser}
            autoComplete="off"
          />
          <button
            type="button"
            className="btn-login"
            onClick={handleRegisterNewUser}
            autoComplete="off"
          >
            Cadastrar
          </button>
        </section>
      </div>
    </main>
  );
};

export default RegisterUser;
