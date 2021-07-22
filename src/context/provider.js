import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from '../data/firebaseConnection';
import Context from './context';

const MyProvider = ({ children }) => {
  // Estado que armazena o valor do input de Login
  const [userLogin, setUserLogin] = useState({
    name: '',
    email: '',
  });
  // Estado que armazena dados da API de recomendados
  const [dataApi, setDataApi] = useState([]);
  // Estado para armazenar os dados do Heroi cadastrados no Firebase
  const [heroFirebase, setHeroFirebase] = useState([]);
  // Estado que armazena os valores dos inputs de cadastrar Heroi
  const [heroRegister, setHeroRegister] = useState({
    name: '',
    description: '',
    powers: '',
    patch: '',
  });

  // Estado que redireciona para pagina Home apos excluir um heroi
  const [redirectHome, setRedirectHome] = useState(false);

  // Estado que seta a abertura do modal
  const [openModal, setOpenModal] = useState(false);

  // Estado para saber se ouve alguma edição, se houver faz uma nova requisição
  const [isEdited, setIsEdited] = useState(false);

  // Estado que armazena os dados digitados no modal em editar Heroi
  const [editHero, setEditHero] = useState({
    name: '',
    description: '',
    powers: '',
    patch: '',
  });

  // Função que faz requisição para api de Herois recomendados
  const fetchData = async () => {
    const response = await fetch('https://xmenapiheroku.herokuapp.com/api/characters');
    const responseJson = await response.json();
    setDataApi(responseJson.results);
  };

  // Função que envia os dados de Login ao Firebase
  const handleSetUserFirebase = async () => {
    await firebase.firestore().collection('users')
      .add({
        name: userLogin.name,
        email: userLogin.email,
      })
      .then((result) => result)
      .catch((error) => error);
  };

  // Função que envia os dados do Heroi cadastrado ao Firebase
  const handleSetHeroFirebase = async () => {
    await firebase.firestore().collection('heroes')
      .add(heroRegister)
      .then((result) => result)
      .catch((error) => error);
  };

  // Função que busca os Herois cadastrados no Firebase
  const handleGetHeroFirebase = async () => {
    await firebase.firestore().collection('heroes')
      .get()
      .then((snapshot) => {
        // eslint-disable-next-line prefer-const
        let listHero = [];
        snapshot.forEach((doc) => {
          listHero.push({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            powers: doc.data().powers,
            patch: doc.data().patch,
          });
        });
        setHeroFirebase(listHero);
      })
      .catch((error) => error);
  };

  // Função que delete os dados do Heroi cadastrado ao Firebase
  const handleDeleteHeroFirebase = async (id) => {
    await firebase.firestore().collection('heroes')
      .doc(id)
      .delete()
      .then(() => {
        setRedirectHome(true);
        setRedirectHome(false);
      })
      .catch((error) => error);
  };

  const handleEditHeroFirebase = async (id) => {
    await firebase.firestore().collection('heroes')
      .doc(id)
      .update({
        name: editHero.name,
        description: editHero.description,
        powers: editHero.powers,
        patch: editHero.patch,
      })
      .then(() => {
        setOpenModal(false);
        setIsEdited(!isEdited);
      })
      .catch((error) => error);
  };

  // Ciclo de vida, que chama as funções uma vez para trazer os dados
  useEffect(() => {
    fetchData();
  }, []);

  // Função que pega os dados do input do usuario
  const handleInput = ({ target }) => {
    setUserLogin((oldState) => ({ ...oldState, [target.name]: target.value }));
  };

  // Função que pega os dados dos Herois na pagina de registro
  const handleInputRegister = ({ target }) => (
    setHeroRegister((oldState) => ({ ...oldState, [target.id]: target.value }))
  );

  // Função que pega os dados digitados no input na pagina de editar Heroi
  const handleEditHero = ({ target }) => (
    setEditHero((oldState) => ({ ...oldState, [target.id]: target.value }))
  );

  // Função que abre o modal na pagina details
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  // Estado que é repassado a todos os componentes filhos
  const INITIAL_STATE = {
    userLogin,
    handleInput,
    dataApi,
    fetchData,
    handleInputRegister,
    handleSetUserFirebase,
    handleSetHeroFirebase,
    handleGetHeroFirebase,
    heroFirebase,
    handleDeleteHeroFirebase,
    redirectHome,
    openModal,
    handleOpenModal,
    handleEditHero,
    editHero,
    handleEditHeroFirebase,
    isEdited,
  };

  return (
    <div>
      <Context.Provider value={INITIAL_STATE}>
        {children}
      </Context.Provider>
    </div>
  );
};

MyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MyProvider;
