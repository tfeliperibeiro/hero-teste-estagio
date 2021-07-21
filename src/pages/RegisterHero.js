import React, { useContext } from 'react';
import Context from '../context/context';
import Header from '../components/Header';

const RegisterHero = () => {
  const { handleInputRegister, handleSetHeroFirebase } = useContext(Context);
  return (
    <div>
      <Header />
      <section>
        <label htmlFor="name">
          Digite o nome do Herói:
          <input
            placeholder="Exemplo Wolverine"
            id="name"
            type="text"
            onChange={handleInputRegister}
          />
        </label>
        <label htmlFor="description">
          Escreva a descrição do Herói:
          <textarea
            placeholder="Escreva aqui..."
            id="description"
            type="text"
            onChange={handleInputRegister}
          />
        </label>
        <label htmlFor="powers">
          Digite os poderes do Herói:
          <input
            placeholder="Teletransporte"
            id="powers"
            type="text"
            onChange={handleInputRegister}
          />
        </label>
        <label htmlFor="patch">
          <input
            placeholder="Digite a url da imagem do Herói"
            type="text"
            id="patch"
            onChange={handleInputRegister}
          />
        </label>
        <button onClick={handleSetHeroFirebase} type="button">Cadastrar</button>
      </section>
    </div>
  );
};

export default RegisterHero;
