import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { IoIosNotifications, IoIosNotificationsOutline } from 'react-icons/io';
import * as C from './styles';

import useAuth from '../../hooks/useAuth';
import Action from './Action';


function Header() {

  const { signout } = useAuth();
  const navigate = useNavigate();

  async function handleSignout() {
    await signout();

    alert('Deslogado com sucesso!');

    navigate('/login');
  }

  return (
    <C.Header>
      <C.LogoImg src='' />
      <C.Actions>
        {/* Icone de notificação que ainda não vai funcionar por enquanto */}
        <Action
          Icon={ true ? IoIosNotifications : IoIosNotificationsOutline }
          onClick={() => console.log('Clicou em notificações')}
        />
        <Action
          Icon={ BiLogOut }
          onClick={handleSignout}
        />
      </C.Actions>
    </C.Header>
  );

}

export default Header;
