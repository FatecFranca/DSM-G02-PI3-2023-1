import React, { useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsGeoAlt } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
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
            Text='Meu Perfil'
            to='/perfil'
            Icon={AiOutlineUser}
            bgColor='#696969'
          />
          <Acesso
            Text='Abastecimento'
            to={user?.tipo === 'frenista' ? '/abastecimento' : '/abastecimentos'}
            Icon={TbFile}
            bgColor='#696969'
          />
        </C.Acessos>
      </C.HomeBody>
      <C.Footer>

        <Acesso
          Text='Redes Sociais'
          Icon={TbSocial}
          color='#fff'
          to='https://www.facebook.com/profile.php?id=100092743341231&sk=about_life_events'
        />
        <Acesso
          Text='Onde Estamos'
          Icon={BsGeoAlt}
          color='#fff'
          to='https://www.google.com.br/maps/@-20.5359235,-47.3924639,15.58z?entry=ttu'
        />

        <Acesso
          Text='Suporte'
          Icon={FaEnvelope}
          color='#fff'
          to='mailto:postoshiny@gmail.com'
        />
        { /* Essa tela na verdade vai ser a listagem de abastecimentos, mas por enquanto vai ser a de cadastro de abastecimento para teste */}

      </C.Footer>
    </C.HomeContainer>
  );

}

export default Home;
