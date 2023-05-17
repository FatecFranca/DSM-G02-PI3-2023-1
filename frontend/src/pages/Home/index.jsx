import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsGeoAlt, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { TbFile, TbSocial } from 'react-icons/tb';
import * as C from './styles';


import Header from '../../components/Header';
import Acesso from './components/Acesso';


function Home() {

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
          Text='Abastecimentos'
          to='/abastecimento'
          Icon={ TbFile }
          color='#fff'
        />
      </C.Footer>
    </C.HomeContainer>
  );

}

export default Home;
