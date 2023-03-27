import { Obra } from '@/types/obra';

const obras:  Obra[] = [
    {
      id: 1,
      titulo: 'Mona Lisa',
      descricao: 'Pintura a óleo de Leonardo da Vinci',
      foto: require('../../public/img/mona-lisa.jpg'),
      fotos: [
        require('../../public/img/mona-lisa.jpg'),
        require('../../public/img/mona-lisa.jpg'),
        require('../../public/img/mona-lisa.jpg'),
      ],
    },
    {
      id: 2,
      titulo: 'A noite estrelada',
      descricao: 'Pintura a óleo de Vincent van Gogh',
      foto: require('../../public/img/a-noite-estrelada.jpg'),
      fotos: [
        require('../../public/img/a-noite-estrelada.jpg'),
        require('../../public/img/a-noite-estrelada.jpg'),
        require('../../public/img/a-noite-estrelada.jpg'),
      ],
    },
    {
      id: 3,
      titulo: 'O Grito',
      descricao: 'Pintura a óleo de Edvard Munch',
      foto: require('../../public/img/o-grito.jpg'),
      fotos: [
        require('../../public/img/o-grito.jpg'),
        require('../../public/img/a-noite-estrelada.jpg'),
        require('../../public/img/o-grito.jpg'),
        
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/o-grito.jpg'),
        
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/o-grito.jpg'),
        
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/o-grito.jpg'),
        
        require('../../public/img/guernica.jpg'),
        
        require('../../public/img/os-girassois.jpg'),
      ],
    },
    {
      id: 4,
      titulo: 'Os Girassóis',
      descricao: 'Pintura a óleo de Vincent van Gogh',
      foto: require('../../public/img/os-girassois.jpg'),
      fotos: [
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/os-girassois.jpg'),
        require('../../public/img/os-girassois.jpg'),
      ],
    },
    {
      id: 5,
      titulo: 'Guernica',
      descricao: 'Pintura a óleo de Pablo Picasso',
      foto: require('../../public/img/guernica.jpg'),
      fotos: [
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
        require('../../public/img/guernica.jpg'),
      ],
    },
    {
        id: 6,
        titulo: 'Mona Lisa',
        descricao: 'Pintura a óleo de Leonardo da Vinci',
        foto: require('../../public/img/mona-lisa.jpg'),
        fotos: [
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
        ],
      },{
        id: 7,
        titulo: 'Mona Lisa',
        descricao: 'Pintura a óleo de Leonardo da Vinci',
        foto: require('../../public/img/mona-lisa.jpg'),
        fotos: [
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
        ],
      },{
        id: 8,
        titulo: 'Mona Lisa',
        descricao: 'Pintura a óleo de Leonardo da Vinci',
        foto: require('../../public/img/mona-lisa.jpg'),
        fotos: [
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
        ],
      },{
        id: 9,
        titulo: 'Mona Lisa',
        descricao: 'Pintura a óleo de Leonardo da Vinci',
        foto: require('../../public/img/mona-lisa.jpg'),
        fotos: [
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
        ],
      },{
        id: 10,
        titulo: 'Mona Lisa',
        descricao: 'Pintura a óleo de Leonardo da Vinci',
        foto: require('../../public/img/mona-lisa.jpg'),
        fotos: [
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
        ],
      },{
        id: 11,
        titulo: 'Mona Lisa',
        descricao: 'Pintura a óleo de Leonardo da Vinci',
        foto: require('../../public/img/mona-lisa.jpg'),
        fotos: [
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
          require('../../public/img/mona-lisa.jpg'),
        ],
      },
  ];

const getObras = async () => {
    return obras;
}

export default {
    getObras,
}