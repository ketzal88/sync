const apartments = [{
  "id": "UF305",
  "superficie": "50m2",
  "piso": 1,
  "dormitorios": 3,
  "amenities": ["laundry", "garage"],
  "pdf": "https:linkpdf",
  "responsableLink": "http: link a calendly",
  "responsableNombre": "Pirulo",
  "img1": "https://images.adsttc.com/media/images/5ca6/130c/284d/d1a3/1e00/02fb/large_jpg/2018.03.03_Starship_Landing_Luna_Plan.jpg?1554387716",
  "tipo": "monoambiente"
  },
  {
  "id": "UF306",
  "superficie": "50m2",
  "piso": 1,
  "dormitorios": 3,
  "amenities": ["laundry", "garage"],
  "pdf": "https:linkpdf",
  "responsableLink": "http: link a calendly",
  "responsableNombre": "Pirulo",
  "img1": "https://images.adsttc.com/media/images/5ca6/130c/284d/d1a3/1e00/02fb/large_jpg/2018.03.03_Starship_Landing_Luna_Plan.jpg?1554387716",
  "tipo": "dosambientes"
  },
  {
  "id": "UF307",
  "superficie": "50m2",
  "piso": 1,
  "dormitorios": 3,
  "amenities": ["laundry", "garage"],
  "pdf": "https:linkpdf",
  "responsableLink": "http: link a calendly",
  "responsableNombre": "Pirulo",
  "img1": "https://images.adsttc.com/media/images/5ca6/130c/284d/d1a3/1e00/02fb/large_jpg/2018.03.03_Starship_Landing_Luna_Plan.jpg?1554387716",
  "tipo": "tresambientes"
  }
  ]
/* let apartments = [
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 0,
    },
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 1,
    },
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 2,
    },
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 3,
    },
    {
      imagen: 'https://lumen.uv.mx/recursoseducativos/PlanosArquitectonicos/img/escritorio/conceptos/planosinstalaciones4.png',
      name: "UF 305",
      sizes: '65.43',
      unit: 'M2',
      characteristics: [
        '2do piso',
        '2 dormitorios'
      ],
      id: 4,
    },
  ]; */
  
  export function getApartments() {
    return apartments;
  }

  export function getApartment(id) {
    return apartments.find(
      (apartment) => apartment.id === id
    );
  }
