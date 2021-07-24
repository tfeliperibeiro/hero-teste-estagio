import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../context/context';

import '../css/registerHero.css';

// Pagina onde o usuario pode Registrar os Herois
const RegisterHero = () => {
  const {
    handleInputRegister,
    handleSetHeroFirebase,
    redirectHome,
  } = useContext(Context);

  return (
    <div>
      {redirectHome && <Redirect to="/home" />}
      <section className="container-register">
        <form onSubmit={handleSetHeroFirebase} className="container-input">
          <div className="input-register">
            <label className="label" htmlFor="name">
              Digite o nome do Herói:
              <input
                placeholder="Ex: Wolverine"
                id="name"
                type="text"
                onChange={handleInputRegister}
                autoComplete="off"
                required
              />
            </label>
          </div>
          <div className="input-register">
            <label className="label" htmlFor="description">
              Escreva a descrição do Herói:
              <input
                placeholder="Escreva aqui..."
                id="description"
                type="text"
                onChange={handleInputRegister}
                autoComplete="off"
                required
              />
            </label>
          </div>
          <div className="input-register">
            <label className="label" htmlFor="powers">
              Digite o poder do Herói:
              <input
                placeholder="Ex: Ler a mente"
                id="powers"
                type="text"
                onChange={handleInputRegister}
                autoComplete="off"
                required
              />
            </label>
          </div>
          <div className="input-register">
            <label className="label" htmlFor="patch">
              Cole a URL da imagem:
              <input
                placeholder="Cole a URL da imagem do Herói aqui!"
                type="text"
                id="patch"
                onChange={handleInputRegister}
                autoComplete="off"
                required
              />
            </label>
          </div>
          <button
            className="btn-register-hero"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
        <a
          href="https://youtu.be/eQhM9emd6iA"
          className="link-get-url"
          target="_blank"
          rel="noreferrer"
        >
          Veja como pegar o endereço da imagem.
        </a>
      </section>
    </div>
  );
};

export default RegisterHero;
