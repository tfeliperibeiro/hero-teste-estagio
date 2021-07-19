import React, { useContext } from 'react';
import Context from '../context/context';

const RegisterHero = () => {
  const { handleRegisterCards, handleSaveHero } = useContext(Context);
  return (
    <section>
      <label htmlFor="name">
        Digite o nome do Herói:
        <input
          placeholder="Exemplo Wolverine"
          id="name"
          type="text"
          onChange={handleRegisterCards}
        />
      </label>
      <label htmlFor="description">
        Escreva a descrição do Herói:
        <textarea
          placeholder="Escreva aqui..."
          id="description"
          type="text"
          onChange={handleRegisterCards}
        />
      </label>
      <label htmlFor="powers">
        Digite os poderes do Herói:
        <input
          placeholder="Teletransporte"
          id="powers"
          type="text"
          onChange={handleRegisterCards}
        />
      </label>
      <label htmlFor="patch">
        <input
          placeholder="Digite a url da imagem do Herói"
          type="text"
          id="patch"
          onChange={handleRegisterCards}
        />
      </label>
      <button onClick={handleSaveHero} type="button">Cadastrar</button>
    </section>
  );
};

export default RegisterHero;
