import React, { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const ContextLotoFacil = createContext();

export const LotoFacilProvider = ({ children }) => {
  const [n, setN] = useState(15);
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSave, setShowSave] = useState(true);
  const [showButaoLimpar, setShowButaoLimpar] = useState(true)
  const [showAguardandoPalpites, setShowAguardandoPalpites] = useState(true)

  const [data, setData] = useState(() => {
    // Inicializar com dados salvos no localStorage para LotoFácil
    const savedData = localStorage.getItem("lotoFacilNumbers");
    return savedData ? JSON.parse(savedData) : [];
  });

  const generateNumbersLotoFacil = () => {
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
    if (numbers.length === 0) {
      toast.error("Nenhum número gerado para salvar.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    
    const updatedData = [...data, numbers];
    setData(updatedData);
    localStorage.setItem("lotoFacilNumbers", JSON.stringify(updatedData));

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
    const savedData = localStorage.getItem("lotoFacilNumbers");
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
    <ContextLotoFacil.Provider
      value={{
        n,
        data,
        numbers,
        loading,
        showSave,
        showButaoLimpar,
        showAguardandoPalpites,
        setN,
        saveData,
        readData,
        deleteData,
        setShowButaoLimpar, 
        setShowAguardandoPalpites,
        generateNumbersLotoFacil,
      }}
    >
      {children}
    </ContextLotoFacil.Provider>
  );
};
