// GeraPalpites LotoFacil
import React, { useContext } from "react";
import { ContextLotoFacil } from "../../context/ContextLotoFacil";
import styles from './LotoFacil.module.css';
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
        generateNumbersLotoFacil,
    } = useContext(ContextLotoFacil);

    return (
        <div className="container GerarPalpites" >
            <div className={styles.card}>
                <select
                    className={styles.select}
                    value={n}
                    onChange={(e) => setN(parseInt(e.target.value))}
                >           
                    <option value={15}>15 números</option>
                    <option value={16}>16 números</option>
                    <option value={17}>17 números</option>
                    <option value={18}>18 números</option>
                    <option value={19}>19 números</option>
                    <option value={20}>20 números</option>
                </select>
                <button className="button" onClick={generateNumbersLotoFacil}>
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
                {!loading && !showSave && (
                    <>
                        <button className="button" onClick={saveData} style={{ marginTop: 20 }}>
                            <span className="btnTxt"> Salvar</span>
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
