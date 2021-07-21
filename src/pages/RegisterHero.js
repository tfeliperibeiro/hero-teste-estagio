import React, { useContext } from 'react';
import Context from '../context/context';
import Header from '../components/Header';

import '../css/registerHero.css';

const RegisterHero = () => {
  const { handleInputRegister, handleSetHeroFirebase } = useContext(Context);
  return (
    <div>
      <Header />
      <section className="container-register">
        <form className="container-input">
          <div className="input-register">
            <label className="label" htmlFor="name">
              Digite o nome do Herói:
              <input
                placeholder="Ex: Wolverine"
                id="name"
                type="text"
                onChange={handleInputRegister}
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
              />
            </label>
          </div>
        </form>
        <a
          href="https://youtu.be/eQhM9emd6iA"
          className="link-get-url"
          target="_blank"
          rel="noreferrer"
        >
          Veja como pegar o endereço da imagem.
        </a>
        <button
          className="btn-register-hero"
          onClick={handleSetHeroFirebase}
          type="button"
        >
          Cadastrar
        </button>
      </section>
    </div>
  );
};

export default RegisterHero;
