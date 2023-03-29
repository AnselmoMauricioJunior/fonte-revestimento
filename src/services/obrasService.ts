import { Obra } from '@/types/obra';

const obras:  Obra[] = [
    {
      id: 1,
      titulo: 'Dynamic Tower',
      descricao: 'A Dynamic Tower (torre dinâmica, em português) foi projetada pelo arquiteto israelense David Fisher para ser construída em Dubai, nos Emirados Árabes Unidos.',
      foto: require('../../public/img/obras-predios/dynamic-tower.jpg'),
      fotos: [
        require('../../public/img/obras-predios/dynamic-tower.jpg'),
        require('../../public/img/obras-predios/dynamic-tower.jpg'),
        require('../../public/img/obras-predios/dynamic-tower.jpg'),
      ],
    },
    {
      id: 2,
      titulo: 'Chang Building',
      descricao: 'O Chang Building ou Elephant Bulding (prédio elefante, em português) foi construído em Bangkok, na Tailândia. O prédio saiu da mente do arquiteto tailandês Ong-ard Satrabhandhu, que queria criar algo que lembrasse um elefante, animal símbolo do país.',
      foto: require('../../public/img/obras-predios/chang-building.jpg'),
      fotos: [
        require('../../public/img/obras-predios/chang-building.jpg'),
        require('../../public/img/obras-predios/chang-building.jpg'),
        require('../../public/img/obras-predios/chang-building.jpg'),
      ],
    },
    {
      id: 3,
      titulo: 'Casa Dançante',
      descricao: 'Outra construção famosa por seu estilo diferenciado: a Casa Dançante foi criada pelo arquiteto croata Vlado Milunić e levantada em Praga, capital da República Checa.',
      foto: require('../../public/img/obras-predios/casadancante.jpg'),
      fotos: [
        require('../../public/img/obras-predios/casadancante.jpg'),
        require('../../public/img/obras-predios/casadancante.jpg'),
        require('../../public/img/obras-predios/casadancante.jpg'),
        
        require('../../public/img/obras-predios/casadancante.jpg'),
        require('../../public/img/obras-predios/casadancante.jpg'),
        
        require('../../public/img/obras-predios/casadancante.jpg'),
        
        require('../../public/img/obras-predios/casadancante.jpg'),
      ],
    },
    {
      id: 4,
      titulo: 'Longaberger Co.',
      descricao: 'Imagina que você tem uma empresa que vendas cestas de palha. Como você ia querer que fosse o prédio da sua matriz? O empresário Dave Longaberger não teve dúvidas: no formato de uma cesta gigante!',
      foto: require('../../public/img/obras-predios/longaberger.jpg'),
      fotos: [
        require('../../public/img/obras-predios/longaberger.jpg'),
        require('../../public/img/obras-predios/longaberger.jpg'),
        require('../../public/img/obras-predios/longaberger.jpg'),
        require('../../public/img/obras-predios/longaberger.jpg'),
        require('../../public/img/obras-predios/longaberger.jpg'),
      ],
    },
    {
      id: 5,
      titulo: 'Congresso Nacional',
      descricao: 'O Congresso Nacional é a casa da Câmara e do Senado em Brasília e foi projetado por Oscar Niemeyer em parceria com o engenheiro pernambucano Joaquim Cardoso. A edificação, chamada oficialmente de Palácio Nereu Ramos, foi inaugurada junto com Brasília e é um dos símbolos da capital federal por conta da sua peculiar aparência, com duas cúpulas contrastantes entre as torres centrais.',
      foto: require('../../public/img/obras-predios/congresso-nacional.jpg'),
      fotos: [
        require('../../public/img/obras-predios/congresso-nacional2.jpg'),
        require('../../public/img/obras-predios/congresso-nacional3.jpg'),
        require('../../public/img/obras-predios/congresso-nacional4.jpg'),
        require('../../public/img/obras-predios/congresso-nacional5.jpg'),
      ],
    },
    {
        id: 6,
        titulo: 'Palácio do Planalto',
        descricao: 'O Palácio do Planalto, lar do gabinete oficial do Presidente em exercício. Situado na Praça dos Três Poderes, ao lado do Congresso e do STF, projetados por Oscar Niemeyer, o Palácio do Planalto emana ares de modernidade graças ao seu arrojado projeto arquitetônico. O charme, é claro, está nas colunas do prédio, que segundo o próprio Niemeyer, conseguiram dar um efeito leve, como penas pousando no chão.',
        foto: require('../../public/img/obras-predios/palacio-planalto.jpg'),
        fotos: [
          require('../../public/img/obras-predios/palacio-planalto.jpg'),
          require('../../public/img/obras-predios/palacio-planalto.jpg'),
          require('../../public/img/obras-predios/palacio-planalto.jpg'),
        ],
      },{
        id: 7,
        titulo: 'Catedral Metropolitana',
        descricao: 'Considerada por muitos como a grande obra-prima de Niemeyer, a construção rendeu ao arquiteto o Prêmio Pritzker em 1988, o equivalente ao Nobel de sua profissão. A beleza dos seus inconfundíveis arcos e vitrais é única. O edifício foi projetado para relembrar a coroa de espinhos usada por Jesus Cristo. Em cada uma das suas quatro entradas, há estátuas representando Mateus, Marcos, João e Lucas.',
        foto: require('../../public/img/obras-predios/catedral-metropolitana.jpg'),
        fotos: [
          require('../../public/img/obras-predios/catedral-metropolitana.jpg'),
        ],
      },
      {
        id: 8,
        titulo: 'Museu Nacional da República',
        descricao: 'Pertinho da Catedral Metropolitana, o Museu Nacional da República, no Setor Cultural Sul da Esplanada dos Ministérios, é outra obra arquitetônica de Oscar Niemeyer que costuma atrair a atenção dos turistas pelo seu incrível formato de cúpula com ares pra lá de futuristas.',
        foto: require('../../public/img/obras-predios/museu-nacional-republica.jpg'),
        fotos: [
          require('../../public/img/obras-predios/museu-nacional-republica.jpg'),
          require('../../public/img/obras-predios/museu-nacional-republica.jpg'),
          require('../../public/img/obras-predios/museu-nacional-republica.jpg'),
        ],
      }
  ];

const getObras = async () => {

    return obras;
}

export default {
    getObras,
}