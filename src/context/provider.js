import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import firebase from '../services/firebaseConnection';
import Context from './context';

const MyProvider = ({ children }) => {
  // Estado que recebe o valor do input de Login de usuario
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  // Estado que recebe input de registro de usuario
  const [userRegister, setUserRegister] = useState({
    email: '',
    password: '',
  });

  /* Estado que recebe se o usuario
  foi cadastrado para redirecionar para outra pagina */
  const [isRegistered, setIsRegistered] = useState(false);

  // Estado que seta quando o usuario clica no botao
  const [openMenu, setOpenMenu] = useState(false);

  // Estado que recebe dados da API de recomendados
  const [dataApi, setDataApi] = useState([]);
  // Estado para armazenar os dados do Heroi cadastrados no Firebase
  const [heroFirebase, setHeroFirebase] = useState([]);
  // Estado que recebe os valores dos inputs de cadastrar Heroi
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

  // Estado que recebe se o usuario foi logado para redirecionar ele para Home
  const [isLogged, setIsLogged] = useState(false);

  // Estado que recebe o valor do input de filtro
  const [powerFiltered, setPowerFiltered] = useState('');

  // Estado que recebe o email do usuario logado
  const [userData, setUserData] = useState('');

  // Estado que recebe os dados digitados no modal em editar Heroi
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
  const handleSetUserFirebase = () => {
    firebase.firestore().collection('users')
      .add({
        name: userLogin.name,
        email: userLogin.email,
      })
      .then((result) => result)
      .catch((error) => error);
  };

  // Função que envia os dados do Heroi cadastrado ao Firebase
  const handleSetHeroFirebase = (e) => {
    e.preventDefault();
    firebase.firestore().collection('heroes')
      .add(heroRegister)
      .then(() => {
        setRedirectHome(true);
        setRedirectHome(false);
      })
      .catch((error) => error);
  };

  // Função que busca os Herois cadastrados no Firebase
  const handleGetHeroFirebase = () => {
    firebase.firestore().collection('heroes')
      .get()
      .then((snapshot) => {
        const listHero = [];
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
  const handleDeleteHeroFirebase = (id) => {
    firebase.firestore().collection('heroes')
      .doc(id)
      .delete()
      .then(() => {
        setRedirectHome(true);
        setRedirectHome(false);
      })
      .catch((error) => error);
  };

  // Função para editar Heroi no banco de dados
  const handleEditHeroFirebase = (id) => {
    firebase.firestore().collection('heroes')
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

  // Função que cadastra um novo usuario ao firebase
  const handleRegisterNewUser = () => {
    firebase.auth()
      .createUserWithEmailAndPassword(userRegister.email, userRegister.password)
      .then(() => {
        toast.success('Usuario cadastrado!');
        setIsRegistered(true);
        setIsRegistered(false);
      })
      // fazendo tratamento de erros
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          toast.error('Senha menor que 6 caracteres!');
        } else if (error.code === 'auth/invalid-email') {
          toast.error('Digite um email válido!');
        } else if (error.code === 'auth/email-already-in-use') {
          toast.error('Email já em uso!');
        }
      });
  };

  // Função que loga usuario na pagina
  const handleLoginUser = () => {
    firebase.auth()
      .signInWithEmailAndPassword(userLogin.email, userLogin.password)
      .then(() => {
        toast.success('Login feito com sucesso!');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          toast.error('Usuário inválido!');
        } else if (error.code === 'auth/wrong-password') {
          toast.error('Senha incorreta!');
        } else if (error.code === 'auth/invalid-email') {
          toast.error('Email incorreto!');
        }
      });
  };

  // Função que fica monitorando usuario logado
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserData(user.email);
        setIsLogged(true);
      } else {
        setIsLogged(false);
        setUserData('');
      }
    });
  }, [isLogged]);

  // Função que desloga uruario
  const handleLogout = () => {
    firebase.auth().signOut();
    setOpenMenu(false);
  };

  // Ciclo de vida, que chama as funções uma vez para trazer os dados
  useEffect(() => {
    fetchData();
  }, []);

  // Função que pega os dados do input do usuario
  const handleInputLoginUser = ({ target }) => {
    setUserLogin((oldState) => ({ ...oldState, [target.name]: target.value }));
  };

  const handleInputRegisterUser = ({ target }) => {
    setUserRegister((oldState) => ({ ...oldState, [target.name]: target.value }));
  };

  const handleFilterPowers = ({ target }) => {
    setPowerFiltered(target.value);
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

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  // Estado que é repassado a todos os componentes filhos
  const INITIAL_STATE = {
    userLogin,
    userRegister,
    handleInputLoginUser,
    handleInputRegisterUser,
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
    handleRegisterNewUser,
    isRegistered,
    handleLoginUser,
    isLogged,
    heroRegister,
    handleOpenMenu,
    openMenu,
    handleFilterPowers,
    powerFiltered,
    handleLogout,
    userData,
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
