import React from 'react';
import * as C from './styles';

function Action({ Icon, onClick }) {

  return (
    <C.Action
      onClick={onClick}
    >
      <Icon size={28} />
    </C.Action>
  );

}


export default Action;
