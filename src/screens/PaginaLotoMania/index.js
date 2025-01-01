// PaginaLotoFácil.js
import React, { useContext } from "react";
import "../../styles.css"
import styles from './LotoMania.module.css';
import { AppContext } from "../../context/AppContext";
import GerarPalpites from "../../components/LotoMania/GerarPalpites";
import PalpitesSalvos from "../../components/LotoMania/PalpitesSalvos";
import Resultado from "../../components/LotoMania/Resultado";


const PaginaLotoMania = () => {
  const {
    salvos,
    resultados,
    mostrarSalvos,
    mostrarResultados,
    mostrarGerarPalpites
  } = useContext(AppContext)

  return (
    <div className="container">
      <div className="column left">Esquerda</div>
      <div className="column center">
        <h1 className="title">Palpites LotoMania</h1>
        <nav className={styles.menu}>
          <button className={`${styles.menuButton} ${styles.secondary}`} onClick={mostrarGerarPalpites}>
            Gerar Palpites
          </button>
          <button className={`${styles.menuButton} ${styles.primary}`} onClick={mostrarSalvos}>
            Palpites Salvos
          </button>
          <button className={`${styles.menuButton} ${styles.secondary}`} onClick={mostrarResultados}>
            Resultados
          </button>
        </nav>
        {!resultados && !salvos ? (
          <GerarPalpites />
        ) : salvos ? (
          <PalpitesSalvos />
        ) : (
          <Resultado />
        )}
        <div style={{ height: "20px", backgroundColor: "red" }} className="banner">
          Anúncios Aqui
        </div>
      </div>
      <div className="column right">Direita</div>

    </div >
  );
}


export default PaginaLotoMania;
