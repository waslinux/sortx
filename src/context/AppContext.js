import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Estados para alternar entre "Salvos" e "Resultados"
  const [salvos, setSalvos] = useState(false);
  const [resultados, setResultados] = useState(false);
  const [palpites, setPalpites] = useState(false)

  // Função para exibir os "Resultados" e ocultar os outros
  const mostrarResultados = () => {
    setSalvos(false); // Esconde o conteúdo de "Palpites Salvos"
    setResultados(true); // Mostra os "Resultados"
  };

  // Função para exibir os "Palpites Salvos" e ocultar os outros
  const mostrarSalvos = () => {
    setResultados(false); // Esconde os "Resultados"
    setSalvos(true); // Mostra os "Palpites Salvos"
  };
  // Função para exibir os "Gerar Palpites" e ocultar os outros
  const mostrarGerarPalpites = () => {
    setResultados(false); // Esconde os "Resultados"
    setSalvos(false); // Mostra os "Palpites Salvos"
    setPalpites(true);
  };

  return (
    <AppContext.Provider
      value={{
        salvos,
        resultados,
        mostrarSalvos,
        mostrarResultados,
        mostrarGerarPalpites
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
