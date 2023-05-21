import React, { useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsGeoAlt, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { TbFile, TbSocial } from 'react-icons/tb';
import * as C from './styles';

import useAuth from '../../hooks/useAuth';

import Header from '../../components/Header';
import Acesso from './components/Acesso';


function Home() {

  const { user } = useAuth();

  useEffect(() => {
    console.log(`Bem-vindo, ${user.nome}!`);
  }, [user]);

  return (
    <C.HomeContainer>
      <Header />
      <C.HomeBody>
        <C.Acessos>
          <Acesso
            Text='Redes Sociais'
            Icon={ TbSocial }
            bgColor='#696969'
          />
          <Acesso
            Text='Suporte'
            Icon={ BsWhatsapp }
            bgColor='#696969'
          />
          <Acesso
            Text='Meu Perfil'
            to='/perfil'
            Icon={ AiOutlineUser }
            bgColor='#696969'
          />
        </C.Acessos>
      </C.HomeBody>
      <C.Footer>
        <Acesso
          Text='Inicio'
          Icon={ HiOutlineHome }
          to='/'
          color='#fff'
        />
        <Acesso
          Text='Onde Estamos'
          Icon={ BsGeoAlt }
          color='#fff'
        />
        { /* Essa tela na verdade vai ser a listagem de abastecimentos, mas por enquanto vai ser a de cadastro de abastecimento para teste */ }
        <Acesso
          Text='Abastecimento'
          to={user?.tipo === 'frenista' ? '/abastecimento' : '/abastecimentos'}
          Icon={ TbFile }
          color='#fff'
        />
      </C.Footer>
    </C.HomeContainer>
  );

}

export default Home;
