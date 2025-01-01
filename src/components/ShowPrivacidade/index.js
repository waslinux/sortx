// Component em React
import React from "react";
import "./styles.css"; // Importa o arquivo de estilo CSS
import { useNavigate } from "react-router-dom"; // Para navegação entre rotas

const ShowPrivacidade = () => {
    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: '#fff', marginTop:20 , justifySelf:"center"}}>
            <button onClick={() => navigate('/policy')} className="btn">
                Política de Privacidade
            </button>
        </div>
    );
};

export default ShowPrivacidade;
