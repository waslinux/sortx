import React, { useContext, useEffect } from 'react';
import { ContextLotoMania } from '../../context/ContextLotoMania';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './LotoMania.module.css';

const PalpitesSalvos = () => {
  const { data, deleteData, showButaoLimpar, showAguardandoPalpites, setShowButaoLimpar,setShowAguardandoPalpites } = useContext(ContextLotoMania);

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
  useEffect(() => {
    if (data.length > 0) {
      setShowButaoLimpar(false);
      setShowAguardandoPalpites(false);
    } else {
      setShowButaoLimpar(true);
      setShowAguardandoPalpites(true);
    }
  }, [data, setShowButaoLimpar, setShowAguardandoPalpites]);

  const renderItem = (item, index) => (
    <div className={styles.content} key={index}>
      <div>
        <p className={styles.text}>Palpite {index + 1}</p>
      </div>

      <div className={styles.numberList}>
        {item.map((number, numberIndex) => (
          <div className={styles.number} key={numberIndex}>
            <span className={styles.numberText}>{number}</span>
          </div>
        ))}
      </div>
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
          Seus palpites salvos da LotoMania irão aparecer aqui!
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
