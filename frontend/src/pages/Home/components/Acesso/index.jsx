import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';


function Acesso({ Text, Icon, iconColor='#fff', color='#222', bgColor='transparent', to='/' }) {

  return (
    <C.Container>
      <Link to={ to }>
        <C.iconAcesso
          bgColor={ bgColor }
        >
          <Icon
            size={ 56 }
            color={ iconColor }
          />
        </C.iconAcesso>
      </Link>
      <C.labelAcesso color={ color }>{ Text }</C.labelAcesso>
    </C.Container>
  );

}


export default Acesso;
