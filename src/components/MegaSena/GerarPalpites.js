// GeraPalpites MegaSena
import React, { useContext } from "react";
import { ContextMegaSena } from "../../context/ContextMegaSena";
import styles from './MegaSena.module.css';
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
        generateNumbersMegaSena,
    } = useContext(ContextMegaSena);

    return (
        <div className="container GerarPalpites" >
            <div className={styles.card}>
                <select
                    className={styles.select}
                    value={n}
                    onChange={(e) => setN(parseInt(e.target.value))}
                >
                    <option value={6}>06 números</option>
                    <option value={7}>07 números</option>
                    <option value={8}>08 números</option>
                    <option value={9}>09 números</option>
                    <option value={11}>11 números</option>
                    <option value={12}>12 números</option>
                    <option value={13}>13 números</option>
                    <option value={14}>14 números</option>
                    <option value={15}>15 números</option>
                    <option value={16}>16 números</option>
                    <option value={17}>17 números</option>
                    <option value={18}>18 números</option>
                    <option value={19}>19 números</option>
                    <option value={20}>20 números</option>
                </select>
                <button className="button" onClick={generateNumbersMegaSena}>
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
                        <button className="button" onClick={saveData} style={{ marginTop: 40 }}>
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
