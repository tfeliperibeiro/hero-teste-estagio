import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import Context from '../context/context';

import '../css/modal.css';

const Modal = ({ id }) => {
  const {
    handleOpenModal,
    handleEditHero,
    handleEditHeroFirebase,
  } = useContext(Context);

  return (
    <div className="container-modal">
      <div className="modal">
        <section className="container-register">
          <form className="container-input">
            <div className="container-btn-modal">
              <button
                className="icon-close"
                onClick={handleOpenModal}
                type="button"
              >
                <FiX className="icon" size={26} color="#F21B2D" />
              </button>
            </div>
            <div className="input-register">
              <label className="label" htmlFor="name">
                Edite o nome do Herói:
                <input
                  placeholder="Ex: Wolverine"
                  id="name"
                  type="text"
                  onChange={handleEditHero}
                />
              </label>
            </div>
            <div className="input-register">
              <label className="label" htmlFor="description">
                Edite a descrição do Herói:
                <input
                  placeholder="Escreva aqui..."
                  id="description"
                  type="text"
                  onChange={handleEditHero}
                />
              </label>
            </div>
            <div className="input-register">
              <label className="label" htmlFor="powers">
                Edite o poder do Herói:
                <input
                  placeholder="Ex: Ler a mente"
                  id="powers"
                  type="text"
                  onChange={handleEditHero}
                />
              </label>
            </div>
            <div className="input-register">
              <label className="label" htmlFor="patch">
                Edite a URL da imagem:
                <input
                  placeholder="Cole a URL da imagem do Herói aqui!"
                  type="text"
                  id="patch"
                  onChange={handleEditHero}
                />
              </label>
            </div>
          </form>
          <button
            className="btn-register-hero"
            type="submit"
            onClick={() => (handleEditHeroFirebase(id))}
          >
            Salvar
          </button>
        </section>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Modal;
