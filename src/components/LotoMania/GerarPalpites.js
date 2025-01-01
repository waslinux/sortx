// PaginaLotoFácil.js
import React, { useContext } from "react";
import styles from './LotoMania.module.css';
import { ContextLotoMania } from "../../context/ContextLotoMania";
import MessagesItem from "../Messages/MessagesItem";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GerarPalpites = () => {
    const {
        n,
        setN,
        numbers,
        loading,
        showSave,
        saveData,
        generateNumbersLotoMania,
    } = useContext(ContextLotoMania);

    return (
        <div className="container GerarPalpites" >
            <div className={styles.card}>
                <button className="button" onClick={generateNumbersLotoMania}>
                    <span className="btnTxt">
                        {loading ? "Gerando Números..." : "Gerar Números"}
                    </span>
                </button>

                <div className={styles.numberBox}>
                    {loading ? (
                        <div className={styles.spinner}></div>
                    ) : (
                        numbers.map((num, index) => (
                            <div className={styles.numberItem} key={index}>
                                <p className={styles.numberTxt}>{num}</p>
                            </div>
                        ))
                    )}
                </div>

                {/* O botão "Salvar" e a mensagem só aparecem após gerar números */}
                {!loading && showSave && (
                    <>
                        <button className="button" onClick={saveData}>
                            <span className="btnTxt">Salvar</span>
                        </button>
                        <MessagesItem />
                    </>
                )}
            </div>
            <div style={{ height: "20px" }} className="banner">
                Anúncios Aqui
            </div>
            <ToastContainer />
        </div>
    );
};

export default GerarPalpites;
