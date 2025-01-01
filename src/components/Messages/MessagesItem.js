import React from 'react';

const MessagesItem = () => {
  const list = [
    {
      id: 1,
      frase: 'Quer você pense que pode ou não, você está certo.',
      autor: 'Henry Ford',
    },
    {
      id: 2,
      frase: 'Tenha até pesadelos, se necessário for. Mas sonhe.',
      autor: 'Patrícia Galvão',
    },
    {
      id: 3,
      frase: 'Mire na lua. Mesmo que você erre, você vai acertar as estrelas.',
      autor: 'Les Brown',
    },
    {
      id: 4,
      frase: 'O dia de amanhã ninguém usou. Pode ser seu.',
      autor: 'Pagano Sobrinho',
    },
    {
      id: 5,
      frase: 'Tudo o que você sempre quis está do outro lado do medo.',
      autor: 'George Addair',
    },
    {
      id: 6,
      frase: 'Quanto mais trabalho, mais sorte tenho.',
      autor: 'Samuel Goldwyn',
    },
    {
      id: 7,
      frase: 'O mestre falhou mais vezes do que o iniciante sequer tentou.',
      autor: 'Marco Aurélio',
    },
    {
      id: 9,
      frase: 'Nossa vida é o que nossos pensamentos fazem dela.',
      autor: 'Marco Aurélio',
    },
    {
      id: 10,
      frase: 'Caia sete vezes e levante-se oito.',
      autor: 'Provérbio japonês',
    },
    {
      id: 11,
      frase: 'A perseverança é a mãe da boa sorte.',
      autor: 'Miguel de Cervantes',
    },
    {
      id: 12,
      frase: 'Tenha fé em Deus, tenha fé na vida.Tente outra vez!',
      autor: 'Raul Seixas',
    },
    {
      id: 13,
      frase: 'Você nunca será velho demais para sonhar um novo sonho.',
      autor: 'C. S. Lewis',
    },
    { id: 14, frase: 'Pense na sorte e você será sortudo', autor: '' },
    {
      id: 15,
      frase: 'Imagine uma nova história para sua vida e acredite nela.',
      autor: 'Paulo Coelho',
    },
    { id: 16, frase: 'Tudo o que temos é o hoje. Viva-o!', autor: 'Aline Saab' },
    {
      id: 17,
      frase: 'Minha ambição sempre foi poder realizar os sonhos.',
      autor: 'Bill Gates',
    },
    {
      id: 18,
      frase: 'A vitória sempre foi de quem nunca duvidou dela',
      autor: 'Raul Follerean',
    },
    { id: 19, frase: 'Quem acredita sempre alcança', autor: 'Renato Russo' },
    {
      id: 20,
      frase: 'Imagine uma nova história para sua vida e acredite nela.',
      autor: 'Paulo Coelho',
    },
    {
      id: 21,
      frase: 'O melhor amuleto da sorte é a fé.',
      autor: '',
    },
    {
      id: 22,
      frase: 'A sua sorte é você mesmo quem faz… Acredite e tudo dará certo!',
      autor: '',
    },
    {
      id: 23,
      frase: 'A perseverança é a mãe da boa sorte.',
      autor: '',
    },
    {
      id: 24,
      frase: 'Aproveite: seu tempo é agora!',
      autor: '',
    },
    {
      id: 25,
      frase:
        'Não abra mão do que você acredita só porque alguém acha que não vale a pena.',
      autor: '',
    },
    {
      id: 26,
      frase: 'As melhores coisas acontecem para quem levanta e faz!',
      autor: '',
    },
    {
      id: 27,
      frase: 'Faça do "é impossível" a sua maior motivação.',
      autor: '',
    },
    {
      id: 28,
      frase:
        'Motive a si mesmo a prosseguir, pois você é o único que entende suas dificuldades.',
      autor: '',
    },
    {
      id: 29,
      frase: 'Deixe para trás o que não te leva para frente.',
      autor: '',
    },
    {
      id: 30,
      frase:
        'Comece de onde você está. Use o que você tiver. Faça o que você puder.',
      autor: 'Arthur Ashe',
    },
    {
      "id": 31,
      "frase": "Acredite em si mesmo e nos seus sonhos. Você é capaz!",
      "autor": ""
    },
    {
      "id": 32,
      "frase": "Nunca abra mão do que você acredita só porque alguém acha que não vale a pena.",
      "autor": ""
    },
    {
      "id": 33,
      "frase": "As melhores coisas acontecem para quem levanta e faz!",
      "autor": ""
    },
    {
      "id": 34,
      "frase": "Faça do 'é impossível' a sua maior motivação.",
      "autor": ""
    },
    {
      "id": 35,
      "frase": "Motive a si mesmo a prosseguir, pois você é o único que entende suas dificuldades.",
      "autor": ""
    },
    {
      "id": 36,
      "frase": "Deixe para trás o que não te leva para frente.",
      "autor": ""
    },
    {
      "id": 37,
      "frase": "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
      "autor": "Arthur Ashe"
    },
    {
      "id": 38,
      "frase": "Acredite em si mesmo e nos seus sonhos. Você é capaz!",
      "autor": ""
    },
    {
      "id": 39,
      "frase": "Nunca abra mão do que você acredita só porque alguém acha que não vale a pena.",
      "autor": ""
    },
    {
      "id": 40,
      "frase": "As melhores coisas acontecem para quem levanta e faz!",
      "autor": ""
    },
    {
      "id": 41,
      "frase": "Faça do 'é impossível' a sua maior motivação.",
      "autor": ""
    },
    {
      "id": 42,
      "frase": "Motive a si mesmo a prosseguir, pois você é o único que entende suas dificuldades.",
      "autor": ""
    },
    {
      "id": 43,
      "frase": "Deixe para trás o que não te leva para frente.",
      "autor": ""
    },
    {
      "id": 44,
      "frase": "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
      "autor": "Arthur Ashe"
    },
    {
      "id": 45,
      "frase": "Acredite em si mesmo e nos seus sonhos. Você é capaz!",
      "autor": ""
    },
    {
      "id": 46,
      "frase": "Nunca abra mão do que você acredita só porque alguém acha que não vale a pena.",
      "autor": ""
    },
    {
      "id": 47,
      "frase": "As melhores coisas acontecem para quem levanta e faz!",
      "autor": ""
    },
    {
      "id": 48,
      "frase": "Faça do 'é impossível' a sua maior motivação.",
      "autor": ""
    },
    {
      "id": 49,
      "frase": "Motive a si mesmo a prosseguir, pois você é o único que entende suas dificuldades.",
      "autor": ""
    },
    {
      "id": 50,
      "frase": "Deixe para trás o que não te leva para frente.",
      "autor": ""
    },
    {
      "id": 51,
      "frase": "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
      "autor": "Arthur Ashe"
    },
    {
      "id": 52,
      "frase": "Acredite em si mesmo e nos seus sonhos. Você é capaz!",
      "autor": ""
    },
    {
      "id": 53,
      "frase": "Nunca abra mão do que você acredita só porque alguém acha que não vale a pena.",
      "autor": ""
    },
    {
      "id": 54,
      "frase": "As melhores coisas acontecem para quem levanta e faz!",
      "autor": ""
    },
    {
      "id": 55,
      "frase": "Faça do 'é impossível' a sua maior motivação.",
      "autor": ""
    },
    {
      "id": 56,
      "frase": "Motive a si mesmo a prosseguir, pois você é o único que entende suas dificuldades.",
      "autor": ""
    },
    {
      "id": 57,
      "frase": "Deixe para trás o que não te leva para frente.",
      "autor": ""
    },
    {
      "id": 58,
      "frase": "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
      "autor": "Arthur Ashe"
    },
    {
      "id": 59,
      "frase": "Acredite em si mesmo e nos seus sonhos. Você é capaz!",
      "autor": ""
    },
    {
      "id": 60,
      "frase": "Nunca abra mão do que você acredita só porque alguém acha que não vale a pena.",
      "autor": ""
    },
    {
      "id": 61,
      "frase": "As melhores coisas acontecem para quem levanta e faz!",
      "autor": ""
    },
    {
      "id": 62,
      "frase": "Faça do 'é impossível' a sua maior motivação.",
      "autor": ""
    },
    {
      "id": 63,
      "frase": "Motive a si mesmo a prosseguir, pois você é o único que entende suas dificuldades.",
      "autor": ""
    },
    {
      "id": 64,
      "frase": "Deixe para trás o que não te leva para frente.",
      "autor": ""
    },
    {
      "id": 65,
      "frase": "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
      "autor": "Arthur Ashe"
    },
    {
      "id": 66,
      "frase": "Acredite em si mesmo e nos seus sonhos. Você é capaz!",
      "autor": ""
    },
    {
      "id": 67,
      "frase": "Nunca abra mão do que você acredita só porque alguém acha que não vale a pena.",
      "autor": ""
    },
    {
      "id": 68,
      "frase": "As melhores coisas acontecem para quem levanta e faz!",
      "autor": ""
    },
    {
      "id": 69,
      "frase": "Faça do 'é impossível' a sua maior motivação.",
      "autor": ""
    },
    {
      "id": 70,
      "frase": "Motive a si mesmo a prosseguir, pois você é o único que entende suas dificuldades.",
      "autor": ""
    },
    {
      "id": 71,
      "frase": "Deixe para trás o que não te leva para frente.",
      "autor": ""
    },
    {
      "id": 72,
      "frase": "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
      "autor": "Arthur Ashe"
    },
    {
      "id": 73,
      "frase": "Acredite em si mesmo e nos seus sonhos. Você é capaz!",
      "autor": ""
    },
    {
      "id": 74,
      "frase": "Nunca abra mão do que você acredita só porque alguém acha que não vale a pena.",
      "autor": ""
    },
    {
      "id": 75,
      "frase": "As melhores coisas acontecem para quem levanta e faz!",
      "autor": ""
    },
    {
      "id": 76,
      "frase": "Faça do 'é impossível' a sua maior motivação.",
      "autor": ""
    },
    {
      "id": 77,
      "frase": "Motive a si mesmo a prosseguir, pois você é o único que entende suas dificuldades.",
      "autor": ""
    },
    {
      "id": 78,
      "frase": "Deixe para trás o que não te leva para frente.",
      "autor": ""
    },
    {
      "id": 79,
      "frase": "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
      "autor": "Arthur Ashe"
    },
    {
      "id": 80,
      "frase": "Acredite em si mesmo e nos seus sonhos. Você é capaz!",
      "autor": ""
    },
    {
      "id": 81,
      "frase": "Nunca abra mão do que você acredita só porque alguém acha que não vale a pena.",
      "autor": ""
    },
    {
      "id": 82,
      "frase": "As melhores coisas acontecem para quem levanta e faz!",
      "autor": ""
    },
    {
      "id": 83,
      "frase": "Faça do 'é impossível' a sua maior motivação.",
      "autor": ""
    },
    {
      "id": 84,
      "frase": "Motive a si mesmo a prosseguir, pois você é o único que entende suas dificuldades.",
      "autor": ""
    },
    {
      "id": 85,
      "frase": "Deixe para trás o que não te leva para frente.",
      "autor": ""
    },
    {
      "id": 86,
      "frase": "Comece de onde você está. Use o que você tiver. Faça o que você puder.",
      "autor": "Arthur Ashe"
    },
    {
      "id": 87,
      "frase": "Acredite em si mesmo e nos seus sonhos. Você é capaz!",
      "autor": ""
    },
    {
      "id": 88,
      "frase": "Nunca abra mão do que você acredita só porque alguém acha que não vale a pena.",
      "autor": ""
    },
    {
      "id": 89,
      "frase": "Acredite em si mesmo e no poder dos seus sonhos.",
      "autor": ""
    },
    {
      "id": 90,
      "frase": "Você é mais forte do que pensa e será capaz de superar qualquer desafio.",
      "autor": ""
    },
    {
      "id": 91,
      "frase": "A persistência é o caminho do sucesso. Continue tentando!",
      "autor": ""
    },
    {
      "id": 92,
      "frase": "Não importa o quão devagar você vá, desde que não pare.",
      "autor": ""
    },
    {
      "id": 93,
      "frase": "Acredite que você pode e você já está no meio do caminho.",
      "autor": ""
    },
    {
      "id": 94,
      "frase": "Mantenha seus sonhos vivos. Entenda que eles podem se tornar realidade.",
      "autor": ""
    },
    {
      "id": 95,
      "frase": "Acredite que cada dia é uma nova oportunidade para ser melhor.",
      "autor": ""
    },
    {
      "id": 96,
      "frase": "Não desista só porque está difícil. Os desafios preparam você para o sucesso.",
      "autor": ""
    },
    {
      "id": 97,
      "frase": "Se você acredita, você pode!",
      "autor": ""
    },
    {
      "id": 98,
      "frase": "Não permita que o medo de falhar o impeça de alcançar o sucesso.",
      "autor": ""
    },
    {
      "id": 99,
      "frase": "Acredite em si mesmo e tudo se tornará possível.",
      "autor": ""
    },
    {
      "id": 100,
      "frase": "Você é mais corajoso do que imagina e mais forte do que parece.",
      "autor": ""
    }
  ];

  const item = list[Math.floor(Math.random() * list.length)];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '10px',
      marginTop: '-20px',
      fontFamily: 'Roboto, sans-serif',
    }}>
      <p style={{
        color: '#1a2a33',
        fontStyle: 'italic',
        fontSize: '14px',
      }}>
        "{item.frase}"
      </p>
      <p style={{
        color: '#1a2a33', 
        fontWeight: 'bold',
        fontSize: '12px',
        marginTop: '-10px'
      }}>
        {item.autor}
      </p>
    </div>
  );
};

export default MessagesItem;
