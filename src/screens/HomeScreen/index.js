import React from "react";
import { useNavigate } from "react-router-dom";
import ShowPrivacidade from "../../components/ShowPrivacidade";
import CookieConsent from "../../components/CookieConsent";

const HomeScreen = () => {
  const navigate = useNavigate();

  const loterias = [
    {
      name: "LotoFácil",
      path: "/lotofacil",
      imgSrc: require("../../images/lotofacil.png"), // Caminho relativo a partir deste arquivo
    },
    {
      name: "LotoMania",
      path: "/lotomania",
      imgSrc: require("../../images/lotomania.png"), // Caminho relativo
    },
    {
      name: "MegaSena",
      path: "/megasena",
      imgSrc: require("../../images/megasena.png"), // Caminho relativo
    },
  ];

  return (
    <div className="container">        
      <div className="column left">Esquerda</div>
      <div className="column center">
      <ShowPrivacidade />
          <h1 className="title">SORTX</h1>
          <div className="container HomeScreen" style={{ }}>
            <div
              className="scrollable-content"
              style={{
                flex: "1",
                overflowY: "auto",
                maxHeight: "600px",
                padding: "10px",
              }}
            >
              {loterias.map((loteria, index) => (
                <div
                  key={index}
                  onClick={() => navigate(loteria.path)} // Redireciona ao clicar
                  style={{
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    padding: "10px",
                    margin: "10px auto",
                    maxWidth: "400px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={loteria.imgSrc}
                    alt={loteria.name}
                    style={{ maxWidth: "100%", borderRadius: "10px" }}
                  />
                  <h2 style={{ fontSize: "16px", margin: "15px 0" }}>Palpites da Sorte {loteria.name}</h2>
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    {`${loteria.name === "LotoFácil"
                      ? "Deixe a sorte trabalhar a seu favor com nossos palpites otimizados para LotoFácil."
                      : loteria.name === "LotoMania"
                        ? "Experimente a emoção de criar combinações vencedoras na LotoMania."
                        : "Aposte nos números da sorte e dispute os maiores prêmios do Brasil."
                      }`}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <CookieConsent />
          <div style={{ height: "20px" }} className="banner">
            Anúncios Aqui
          </div>
        </div>
      <div className="column right">Direita</div>

    </div >
  );
};

export default HomeScreen;
