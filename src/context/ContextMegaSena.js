import React, { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const ContextMegaSena = createContext();

export const MegaSenaProvider = ({ children }) => {
  const [n] = useState(6);
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSave, setShowSave] = useState(true);
  const [showButaoLimpar, setShowButaoLimpar] = useState(true)
  const [showAguardandoPalpites, setShowAguardandoPalpites] = useState(true)

  const [data, setData] = useState(() => {
    // Inicializar com dados salvos no localStorage para MegaSena
    const savedData = localStorage.getItem("megaSenaNumbers");
    return savedData ? JSON.parse(savedData) : [];
  });

  
  const generateNumbersMegaSena = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowSave(false);

      const randomNumbers = new Set();
      while (randomNumbers.size < n) {
        randomNumbers.add(Math.floor(Math.random() * 60) + 1); // Gera números entre 1 e 60
      }

      const sortedNumbers = [...randomNumbers].sort((a, b) => a - b);
      setNumbers(sortedNumbers);
    }, 2000);
  };

  const saveData = () => {
    setShowButaoLimpar(false);
    setShowAguardandoPalpites(false);
    const updatedData = [...data, numbers];
    setData(updatedData);
    localStorage.setItem("megaSenaNumbers", JSON.stringify(updatedData));

    toast.success("Números salvos com sucesso!", {
      position: "top-right", // Use string ao invés de `toast.POSITION.TOP_RIGHT`
      autoClose: 3000, // 3 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const readData = () => {
    const savedData = localStorage.getItem("megaSenaNumbers");
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      alert("Nenhum dado salvo.");
    }
  };

  const deleteData = () => {
    setShowButaoLimpar(true);
    setShowAguardandoPalpites(true);
    const confirmed = window.confirm("Tem certeza que deseja apagar todos os Palpites da Sorte?");
    if (confirmed) {
      localStorage.removeItem("megaSenaNumbers"); // Remove os palpites
      setData([]);
      toast.success("Palpites apagados com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: "black",
          color: "#ffffff",
        },
      });
    }
  };

  return (
    <ContextMegaSena.Provider
      value={{
        data,
        numbers,
        loading,
        showSave,
        showButaoLimpar,
        showAguardandoPalpites,
        setShowButaoLimpar,
        setShowAguardandoPalpites,
        saveData,
        readData,
        deleteData,
        generateNumbersMegaSena,
      }}
    >
      {children}
    </ContextMegaSena.Provider>
  );
};
