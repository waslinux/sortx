import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext'; // Importa o contexto

const ButtonClear = () => {
  const { clearData,  } = useContext(AppContext);

  return (
    <button 
      onClick={clearData}
      className="button limpar"
    >
      <span className="btnTxt">Limpar</span>
    </button>
  );
};

export default ButtonClear;
