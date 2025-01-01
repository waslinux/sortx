import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    performance: false,
    marketing: false,
  });

  useEffect(() => {
    // Verifica se o usuário já deu ou rejeitou o consentimento dos cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else {
      const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences'));
      if (savedPreferences) {
        setPreferences(savedPreferences);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  const handlePreferenceChange = (event) => {
    const { name, checked } = event.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: checked,
    }));
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.banner}>
        <div style={styles.content}>
          <h3 style={styles.title}>Cookies no nosso site</h3>
          <p style={styles.text}>Escolha os cookies que deseja ativar.</p>

          <div style={styles.cookieOptions}>
            <div style={styles.cookieOption}>
              <label>
                <input
                  type="checkbox"
                  name="necessary"
                  checked={preferences.necessary}
                  disabled
                  onChange={handlePreferenceChange}
                />
                Cookies Necessários (sempre ativados)
              </label>
            </div>

            <div style={styles.cookieOption}>
              <label>
                <input
                  type="checkbox"
                  name="performance"
                  checked={preferences.performance}
                  onChange={handlePreferenceChange}
                />
                Cookies de Desempenho
              </label>
            </div>

            <div style={styles.cookieOption}>
              <label>
                <input
                  type="checkbox"
                  name="marketing"
                  checked={preferences.marketing}
                  onChange={handlePreferenceChange}
                />
                Cookies de Marketing
              </label>
            </div>
          </div>

          <div style={styles.buttons}>
            <button style={styles.button} onClick={handleAcceptAll}>
              Aceitar Todos
            </button>
            <button style={styles.button} onClick={handleSavePreferences}>
              Salvar Preferências
            </button>
            <button style={styles.button} onClick={handleRejectAll}>
              Recusar Todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Estilos atualizados para um popup menor
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  banner: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '15px',
    maxWidth: '400px', // Reduzimos a largura do popup
    width: '80%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '16px', // Font menor
    marginBottom: '10px',
    color: '#585858'
  },
  text: {
    fontSize: '12px',
    marginBottom: '15px',
    color: '#585858'
  },
  cookieOptions: {
    textAlign: 'left',
    marginBottom: '15px',
    color: '#585858'
  },
  cookieOption: {
    margin: '8px 0',
    fontSize: '12px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '6px 12px', // Tamanho do botão menor
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '12px',
    transition: 'background-color 0.3s ease',
    width: '30%',
  },
};

export default CookieConsent;
