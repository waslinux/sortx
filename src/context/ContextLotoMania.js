import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ContextLotoMania = createContext();

export const LotoManiaProvider = ({ children }) => {
  const [n] = useState(50);
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSave, setShowSave] = useState(false);
  const [showButaoLimpar, setShowButaoLimpar] = useState(true)
  const [showAguardandoPalpites, setShowAguardandoPalpites] = useState(true)
  
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("lotoManiaNumbers");
    return savedData ? JSON.parse(savedData) : [];
  });

  const generateNumbersLotoMania = () => {
    setLoading(true);
    setTimeout(() => {
      const randomNumbers = new Set();
      while (randomNumbers.size < n) {
        randomNumbers.add(Math.floor(Math.random() * 100) + 1);
      }
      const sortedNumbers = [...randomNumbers].sort((a, b) => a - b);
      setNumbers(sortedNumbers);
      setLoading(false);
      setShowSave(true);
    }, 2000);
  };

  const saveData = () => {
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
    setShowButaoLimpar(false);
    setShowAguardandoPalpites(false);
    
    localStorage.setItem("lotoManiaNumbers", JSON.stringify(updatedData)); // Salva os números no localStorage
  
    toast.success("Números salvos com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
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
    <ContextLotoMania.Provider
      value={{
        data,
        numbers,
        loading,
        showSave,
        showButaoLimpar,
        showAguardandoPalpites,
        saveData,
        deleteData,
        showAguardandoPalpites, 
        setShowButaoLimpar, 
        setShowAguardandoPalpites,
        generateNumbersLotoMania,
      }}
    >
      {children}
    </ContextLotoMania.Provider>
  );
};
