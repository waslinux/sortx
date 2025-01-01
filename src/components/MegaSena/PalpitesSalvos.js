import React, { useContext, useEffect } from 'react';
import { ContextMegaSena } from '../../context/ContextMegaSena';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './MegaSena.module.css';

const PalpitesSalvos = () => {
  const { data, deleteData, showButaoLimpar, showAguardandoPalpites, setShowButaoLimpar,setShowAguardandoPalpites } = useContext(ContextMegaSena);

  useEffect(() => {
    if (data.length > 0) {
      setShowButaoLimpar(false);
      setShowAguardandoPalpites(false);
    } else {
      setShowButaoLimpar(true);
      setShowAguardandoPalpites(true);
    }
  }, [data, setShowButaoLimpar, setShowAguardandoPalpites]);


  useEffect(() => {
    if (data.length > 0) {
      setShowButaoLimpar(false);
      setShowAguardandoPalpites(false);
    } else {
      setShowButaoLimpar(true);
      setShowAguardandoPalpites(true);
    }
  }, [data, setShowButaoLimpar, setShowAguardandoPalpites]);

  const shareNumbers = () => {
    // Função para compartilhar números, pode ser adaptada para copiar para a área de transferência
    alert('Compartilhar números!');
  };

  const renderItem = (item, index) => (
    <div className={styles.content}>
      <div>
        <p className={styles.text}>Palpite{index + 1}</p>
      </div>

      <div className={styles.numberList}>
        {item.map((number, numberIndex) => (
          <div className={styles.numberCircle} key={numberIndex}>
            <span className="numberText">{number}</span>
          </div>
        ))}
      </div>

      <button className={styles.shareBtn} onClick={shareNumbers}>
        <i className="material-icons">compartilhar</i>
      </button>
    </div>
  );

  return (
    
    <div className="container PalpiteSalvos">
    {!showAguardandoPalpites ?
      <div className={styles.listContainer}>
        {data.map((item, index) => (
          <div key={index}>
            {renderItem(item, index)}
            {/*  <hr className="line" />*/}
          </div>
        ))}
      </div>
      :
      <div className={styles.aguardandoPalpites}>
        <p className={styles.text}>
          Seus palpites salvos da MegaSena irão aparecer aqui!
        </p>
      </div>
    }
    {showButaoLimpar ?
      <></> :
      <button className="button limpar" onClick={deleteData}>
        <span className="btnTxt">Apagar palpites</span>
      </button>}
    <ToastContainer />
  </div>
  );
};

export default PalpitesSalvos;
