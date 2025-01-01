import React, { useState, useEffect } from 'react';

const Resultado = () => {
  const [resultado, setResultado] = useState(null); // Armazenar os resultados
  const [sorteioInput, setSorteioInput] = useState(''); // Armazenar o valor do input
  const [loading, setLoading] = useState(false); // Gerenciar o estado de carregamento
  const [error, setError] = useState(null); // Gerenciar erros

  // Função que busca o resultado ao carregar a página
  useEffect(() => {
    fetchData();
  }, []);

  // Função para buscar os dados
  function fetchData() {
    setLoading(true);
    setError(null);
    fetch('https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados do servidor');
        }
        return response.json();
      })
      .then((data) => {
        setResultado(data);
      })
      .catch((err) => {
        console.error('Erro ao buscar dados:', err);
        setError('Não foi possível carregar resultado, tente novamente de pesquisando pelo nº do concurso.');
      })
      .finally(() => setLoading(false));
  }

  // Função para buscar um resultado específico
  async function buscarResultado() {
    if (!sorteioInput) return; // Garantir que o input não esteja vazio
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena${sorteioInput}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar resultado específico');
      }
      const data = await response.json();
      setResultado(data);
    } catch (err) {
      console.error('Erro ao buscar resultado:', err);
      setError('Não foi possível carregar os resultados do concurso solicitado.');
    } finally {
      setLoading(false);
    }
  }

  // Função para garantir que o campo de sorteio aceite apenas números
  const apenasNumeros = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Exibição do componente
  return (
    <div className="container Resultado">
      <div className="card resultadoMegaSena" >
        {loading && <p>Carregando...</p>}
        {error && (
          <div>
            <p className="error"style={{ color: '#585858' }}>{error}</p>
            <div>
              <p className="resultText" style={{ color: '#585858' }}>
                Buscar por concurso:
                <input
                  type="text"
                  className="input"
                  maxLength="4"
                  value={sorteioInput}
                  onChange={(e) => setSorteioInput(e.target.value)}
                  placeholder="Ex.: 2756"
                  onKeyPress={apenasNumeros}
                />
              </p>
              <button className="butoon" onClick={buscarResultado}>Buscar</button>
            </div>
          </div>
        )}

        {!loading && !error && resultado && (
          <div className="content-result">
            <p className="resultText" style={{ color: '#585858' }} >Número do Sorteio:</p>
            <span style={{ color: '#209869' }} className="item" id="numero">{resultado.numero}</span>

            <p className="resultText" style={{ color: '#585858' }}>Data de Apuração:</p>
            <span style={{ color: '#209869' }} className="item" id="dataApuracao">{resultado.dataApuracao}</span>

            <p className="resultText" style={{ color: '#585858' }}>Números Sorteados:</p>
            <span style={{ color: '#209869' }} className="item dezenasContainer" id="listaDezenas">
              {resultado.listaDezenas ? resultado.listaDezenas.join(', ') : 'Nenhum número sorteado'}
            </span>

            <p className="resultText" style={{ color: '#585858' }}>
              Buscar por concurso:
              <input
                type="text"
                className="input"
                maxLength="4"
                value={sorteioInput}
                onChange={(e) => setSorteioInput(e.target.value)}
                placeholder="Ex.: 2756"
                onKeyPress={apenasNumeros}
              />
            </p>

            <button className="button" onClick={buscarResultado}><span className="btnTxt">Buscar</span></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resultado;
