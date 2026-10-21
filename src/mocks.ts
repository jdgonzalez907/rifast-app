import type { Raffle, RaffleSummary } from '@/core/domain';

const raffle01: Raffle = {
  id: 'raf-001',
  name: 'Sorteo iPhone 16 Pro',
  description:
    'Llévate el último iPhone con solo 2 cifras. ¡Pocas oportunidades!',
  digitCount: 2,
  ticketPrice: 5000,
  status: 'active',
  drawDate: new Date('2026-11-15T20:00:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '05': {
      status: 'paid',
      buyerName: 'Carlos Mendoza',
      buyerPhone: '+573001234567',
      reservedAt: '2026-10-19T14:30:00Z',
      paidAt: '2026-10-19T14:45:00Z',
    },
    '12': {
      status: 'reserved',
      buyerName: 'Diana Restrepo',
      buyerPhone: '+573124445566',
      reservedAt: '2026-10-20T01:15:00Z',
    },
    '24': {
      status: 'paid',
      buyerName: 'Andrés Gomez',
      buyerPhone: '+573158889900',
      reservedAt: '2026-10-19T10:00:00Z',
      paidAt: '2026-10-19T10:20:00Z',
    },
    '42': {
      status: 'reserved',
      buyerName: 'Ana Gómez',
      buyerPhone: '+573119876543',
      reservedAt: '2026-10-20T01:10:00Z',
    },
    '73': {
      status: 'reserved',
      buyerName: 'Cristian Calle',
      buyerPhone: '+573012223344',
      reservedAt: '2026-10-20T02:00:00Z',
    },
    '88': {
      status: 'paid',
      buyerName: 'Luis Torres',
      buyerPhone: '+573154445566',
      reservedAt: '2026-10-18T09:00:00Z',
      paidAt: '2026-10-18T10:30:00Z',
    },
    '95': {
      status: 'paid',
      buyerName: 'Mariana Vélez',
      buyerPhone: '+573007778899',
      reservedAt: '2026-10-19T18:12:00Z',
      paidAt: '2026-10-19T18:40:00Z',
    },
  },
};

const raffle02: Raffle = {
  id: 'raf-002',
  name: 'Gran Rifa Moto Yamaha NMAX',
  description:
    'Sorteo de 3 dígitos basado en los resultados de la lotería principal.',
  digitCount: 3,
  ticketPrice: 15000,
  status: 'active',
  drawDate: new Date('2026-12-01T21:00:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '007': {
      status: 'paid',
      buyerName: 'Santiago Ruiz',
      buyerPhone: '+573103334455',
      reservedAt: '2026-10-17T12:00:00Z',
      paidAt: '2026-10-17T12:15:00Z',
    },
    '124': {
      status: 'paid',
      buyerName: 'Diana Calle',
      buyerPhone: '+573205551122',
      reservedAt: '2026-10-15T18:22:00Z',
      paidAt: '2026-10-15T18:40:00Z',
    },
    '256': {
      status: 'reserved',
      buyerName: 'Daniela Sosa',
      buyerPhone: '+573147778811',
      reservedAt: '2026-10-20T00:10:00Z',
    },
    '512': {
      status: 'reserved',
      buyerName: 'Mateo Restrepo',
      buyerPhone: '+573017778899',
      reservedAt: '2026-10-20T00:45:00Z',
    },
    '777': {
      status: 'paid',
      buyerName: 'Juan Pablo II',
      buyerPhone: '+573112223344',
      reservedAt: '2026-10-16T15:30:00Z',
      paidAt: '2026-10-16T16:00:00Z',
    },
    '999': {
      status: 'paid',
      buyerName: 'Esteban Jaramillo',
      buyerPhone: '+573185554433',
      reservedAt: '2026-10-18T11:20:00Z',
      paidAt: '2026-10-18T11:50:00Z',
    },
  },
};

const raffle03: Raffle = {
  id: 'raf-003',
  name: 'PlayStation 5 Slim',
  description:
    'Sorteo finalizado. Revisa si tu número de 2 cifras resultó ganador.',
  digitCount: 2,
  ticketPrice: 3500,
  status: 'finished',
  drawDate: new Date('2026-10-10T19:30:00Z'),
  winningTickets: ['73'],
  ticketsRegistry: {
    '11': {
      status: 'paid',
      buyerName: 'Alejandro Sanz',
      buyerPhone: '+573002221144',
      reservedAt: '2026-10-08T09:00:00Z',
      paidAt: '2026-10-08T09:30:00Z',
    },
    '21': {
      status: 'paid',
      buyerName: 'Andrés Villa',
      buyerPhone: '+573024449911',
      reservedAt: '2026-10-08T10:00:00Z',
      paidAt: '2026-10-08T10:05:00Z',
    },
    '45': {
      status: 'paid',
      buyerName: 'Roberto Carlos',
      buyerPhone: '+573129990011',
      reservedAt: '2026-10-07T14:20:00Z',
      paidAt: '2026-10-07T15:00:00Z',
    },
    '73': {
      status: 'paid',
      buyerName: 'Mariana Ospina',
      buyerPhone: '+573142223344',
      reservedAt: '2026-10-09T16:40:00Z',
      paidAt: '2026-10-09T17:00:00Z',
    },
    '90': {
      status: 'paid',
      buyerName: 'Laura Tobón',
      buyerPhone: '+573173334455',
      reservedAt: '2026-10-09T11:00:00Z',
      paidAt: '2026-10-09T11:15:00Z',
    },
  },
};

const raffle04: Raffle = {
  id: 'raf-004',
  name: 'Bono de Mercado $1.000.000',
  description:
    'Asegura la despensa del mes con este sorteo rápido de 2 dígitos.',
  digitCount: 2,
  ticketPrice: 2000,
  status: 'active',
  drawDate: new Date('2026-11-20T18:00:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '00': {
      status: 'reserved',
      buyerName: 'Jorge Isaacs',
      buyerPhone: '+573186665544',
      reservedAt: '2026-10-20T02:00:00Z',
    },
    '15': {
      status: 'paid',
      buyerName: 'Miguel Ángel',
      buyerPhone: '+573215556677',
      reservedAt: '2026-10-19T13:00:00Z',
      paidAt: '2026-10-19T13:20:00Z',
    },
    '50': {
      status: 'reserved',
      buyerName: 'Sofia Vergara',
      buyerPhone: '+573014447788',
      reservedAt: '2026-10-20T01:40:00Z',
    },
    '99': {
      status: 'paid',
      buyerName: 'Verónica Castro',
      buyerPhone: '+573059998877',
      reservedAt: '2026-10-19T20:15:00Z',
      paidAt: '2026-10-19T21:00:00Z',
    },
  },
};

const raffle05: Raffle = {
  id: 'raf-005',
  name: 'Nintendo Switch OLED',
  description: 'Sorteo de 3 cifras para los amantes de los videojuegos.',
  digitCount: 3,
  ticketPrice: 8000,
  status: 'active',
  drawDate: new Date('2026-12-15T22:00:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '101': {
      status: 'paid',
      buyerName: 'Lucas Neto',
      buyerPhone: '+573003332255',
      reservedAt: '2026-10-15T10:00:00Z',
      paidAt: '2026-10-15T10:15:00Z',
    },
    '450': {
      status: 'paid',
      buyerName: 'Camilo Tobón',
      buyerPhone: '+573113332211',
      reservedAt: '2026-10-14T11:30:00Z',
      paidAt: '2026-10-14T12:00:00Z',
    },
    '720': {
      status: 'reserved',
      buyerName: 'David Plata',
      buyerPhone: '+573169990088',
      reservedAt: '2026-10-20T02:05:00Z',
    },
    '821': {
      status: 'reserved',
      buyerName: 'Elena Naranjo',
      buyerPhone: '+573128887766',
      reservedAt: '2026-10-20T01:55:00Z',
    },
  },
};

const raffle06: Raffle = {
  id: 'raf-006',
  name: 'Sorteo Relámpago Computador Gamer',
  description: 'AMD Ryzen 7 + RTX 4060. ¡Solo 100 números disponibles!',
  digitCount: 2,
  ticketPrice: 12000,
  status: 'active',
  drawDate: new Date('2026-11-05T20:30:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '03': {
      status: 'paid',
      buyerName: 'Manuela Beltrán',
      buyerPhone: '+573104445588',
      reservedAt: '2026-10-19T09:00:00Z',
      paidAt: '2026-10-19T09:30:00Z',
    },
    '14': {
      status: 'paid',
      buyerName: 'Daniel Marín',
      buyerPhone: '+573167776655',
      reservedAt: '2026-10-19T08:00:00Z',
      paidAt: '2026-10-19T08:15:00Z',
    },
    '25': {
      status: 'reserved',
      buyerName: 'Federico Gutiérrez',
      buyerPhone: '+573026665544',
      reservedAt: '2026-10-20T01:50:00Z',
    },
    '77': {
      status: 'reserved',
      buyerName: 'Paula Agudelo',
      buyerPhone: '+573172225544',
      reservedAt: '2026-10-20T02:10:00Z',
    },
  },
};

const raffle07: Raffle = {
  id: 'raf-007',
  name: 'Televisor LG OLED 55"',
  description: 'Disfruta del mejor cine en casa. Sorteo ejecutado.',
  digitCount: 3,
  ticketPrice: 9000,
  status: 'finished',
  drawDate: new Date('2026-10-01T19:00:00Z'),
  winningTickets: ['333', '888'],
  ticketsRegistry: {
    '111': {
      status: 'paid',
      buyerName: 'Simon Bolivar',
      buyerPhone: '+573001112233',
      reservedAt: '2026-09-25T10:00:00Z',
      paidAt: '2026-09-25T10:30:00Z',
    },
    '333': {
      status: 'paid',
      buyerName: 'Esteban Quito',
      buyerPhone: '+573009991122',
      reservedAt: '2026-09-28T15:00:00Z',
      paidAt: '2026-09-28T15:30:00Z',
    },
    '555': {
      status: 'paid',
      buyerName: 'Francisco de Paula',
      buyerPhone: '+573114445566',
      reservedAt: '2026-09-26T14:00:00Z',
      paidAt: '2026-09-26T14:45:00Z',
    },
    '888': {
      status: 'paid',
      buyerName: 'Gloria Trevi',
      buyerPhone: '+573134447788',
      reservedAt: '2026-09-30T10:12:00Z',
      paidAt: '2026-09-30T11:00:00Z',
    },
  },
};

const raffle08: Raffle = {
  id: 'raf-008',
  name: 'Apple Watch Series 10',
  description: 'Monitorea tu salud con estilo. Sorteo activo de 2 dígitos.',
  digitCount: 2,
  ticketPrice: 4000,
  status: 'active',
  drawDate: new Date('2026-11-28T17:00:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '07': {
      status: 'reserved',
      buyerName: 'James Rodríguez',
      buyerPhone: '+573101010101',
      reservedAt: '2026-10-20T02:12:00Z',
    },
    '10': {
      status: 'paid',
      buyerName: 'Luis Díaz',
      buyerPhone: '+573127772233',
      reservedAt: '2026-10-18T14:00:00Z',
      paidAt: '2026-10-18T14:25:00Z',
    },
    '55': {
      status: 'paid',
      buyerName: 'Valeria Duque',
      buyerPhone: '+573105553344',
      reservedAt: '2026-10-18T16:45:00Z',
      paidAt: '2026-10-18T17:00:00Z',
    },
  },
};

const raffle09: Raffle = {
  id: 'raf-009',
  name: 'Patineta Eléctrica Xiaomi',
  description: 'Muévete por la ciudad sin trancones. 3 dígitos disponibles.',
  digitCount: 3,
  ticketPrice: 6500,
  status: 'active',
  drawDate: new Date('2026-12-20T20:00:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '102': {
      status: 'reserved',
      buyerName: 'Felipe Correa',
      buyerPhone: '+573121110099',
      reservedAt: '2026-10-20T01:30:00Z',
    },
    '321': {
      status: 'paid',
      buyerName: 'Juliana Leyton',
      buyerPhone: '+573162223344',
      reservedAt: '2026-10-17T09:15:00Z',
      paidAt: '2026-10-17T10:00:00Z',
    },
    '500': {
      status: 'reserved',
      buyerName: 'Andrés Cepeda',
      buyerPhone: '+573005554411',
      reservedAt: '2026-10-20T02:00:00Z',
    },
    '999': {
      status: 'paid',
      buyerName: 'Sandra Muñoz',
      buyerPhone: '+573194448877',
      reservedAt: '2026-10-16T14:20:00Z',
      paidAt: '2026-10-16T15:00:00Z',
    },
  },
};

const raffle10: Raffle = {
  id: 'raf-010',
  name: 'Tarjeta Regalo Amazon $200.000 COP',
  description: 'Compra lo que quieras en Amazon. Sorteo rápido completado.',
  digitCount: 2,
  ticketPrice: 3000,
  status: 'finished',
  drawDate: new Date('2026-10-14T21:00:00Z'),
  winningTickets: ['02'],
  ticketsRegistry: {
    '02': {
      status: 'paid',
      buyerName: 'Nicolás G.',
      buyerPhone: '+573000000001',
      reservedAt: '2026-10-13T09:00:00Z',
      paidAt: '2026-10-13T09:10:00Z',
    },
    '14': {
      status: 'paid',
      buyerName: 'Juanes',
      buyerPhone: '+573148887722',
      reservedAt: '2026-10-12T15:00:00Z',
      paidAt: '2026-10-12T15:45:00Z',
    },
    '57': {
      status: 'paid',
      buyerName: 'Shakira',
      buyerPhone: '+573150001122',
      reservedAt: '2026-10-13T11:00:00Z',
      paidAt: '2026-10-13T11:15:00Z',
    },
  },
};

const raffle11: Raffle = {
  id: 'raf-011',
  name: 'Día de Spa en Pareja Todo Incluido',
  description:
    'Regálate un momento de relajación máxima con tu persona favorita.',
  digitCount: 2,
  ticketPrice: 2500,
  status: 'active',
  drawDate: new Date('2026-11-11T16:00:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '13': {
      status: 'reserved',
      buyerName: 'Karol G',
      buyerPhone: '+573160009988',
      reservedAt: '2026-10-20T02:14:00Z',
    },
    '28': {
      status: 'paid',
      buyerName: 'Feid',
      buyerPhone: '+573192223344',
      reservedAt: '2026-10-19T14:00:00Z',
      paidAt: '2026-10-19T14:30:00Z',
    },
  },
};

const raffle12: Raffle = {
  id: 'raf-012',
  name: 'Cámara Instantánea Instax Mini',
  description:
    'Captura tus recuerdos en físico al instante. Sorteo de 2 cifras.',
  digitCount: 2,
  ticketPrice: 3500,
  status: 'active',
  drawDate: new Date('2026-11-25T19:00:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '09': {
      status: 'reserved',
      buyerName: 'Yerry Mina',
      buyerPhone: '+573112224455',
      reservedAt: '2026-10-20T01:50:00Z',
    },
    '19': {
      status: 'paid',
      buyerName: 'Mauricio Restrepo',
      buyerPhone: '+573145556633',
      reservedAt: '2026-10-19T23:00:00Z',
      paidAt: '2026-10-19T23:15:00Z',
    },
    '85': {
      status: 'paid',
      buyerName: 'Juan Cuadrado',
      buyerPhone: '+573006667788',
      reservedAt: '2026-10-18T10:00:00Z',
      paidAt: '2026-10-18T11:00:00Z',
    },
  },
};

const raffle13: Raffle = {
  id: 'raf-013',
  name: 'E-Reader Kindle Paperwhite',
  description: 'Lleva miles de libros en tu bolsillo. 3 cifras para ganar.',
  digitCount: 3,
  ticketPrice: 5000,
  status: 'active',
  drawDate: new Date('2026-12-10T18:30:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '001': {
      status: 'reserved',
      buyerName: 'Gabriel García',
      buyerPhone: '+573019998877',
      reservedAt: '2026-10-20T02:00:00Z',
    },
    '342': {
      status: 'paid',
      buyerName: 'Álvaro Mutis',
      buyerPhone: '+573105554433',
      reservedAt: '2026-10-16T11:00:00Z',
      paidAt: '2026-10-16T11:30:00Z',
    },
    '777': {
      status: 'paid',
      buyerName: 'Tatiana Gómez',
      buyerPhone: '+573218889900',
      reservedAt: '2026-10-15T07:40:00Z',
      paidAt: '2026-10-15T08:00:00Z',
    },
  },
};

const raffle14: Raffle = {
  id: 'raf-014',
  name: 'Barra de Sonido Sony HT',
  description: 'Audio premium e inmersivo para tu hogar. Finalizado.',
  digitCount: 2,
  ticketPrice: 4500,
  status: 'finished',
  drawDate: new Date('2026-10-05T20:00:00Z'),
  winningTickets: ['50'],
  ticketsRegistry: {
    '12': {
      status: 'paid',
      buyerName: 'J Balvin',
      buyerPhone: '+573155554433',
      reservedAt: '2026-10-03T10:00:00Z',
      paidAt: '2026-10-03T10:15:00Z',
    },
    '50': {
      status: 'paid',
      buyerName: 'Gonzalo Pérez',
      buyerPhone: '+573102227766',
      reservedAt: '2026-10-04T12:00:00Z',
      paidAt: '2026-10-04T12:22:00Z',
    },
    '99': {
      status: 'paid',
      buyerName: 'Maluma',
      buyerPhone: '+573129990088',
      reservedAt: '2026-10-04T16:00:00Z',
      paidAt: '2026-10-04T16:30:00Z',
    },
  },
};

const raffle15: Raffle = {
  id: 'raf-015',
  name: 'Kit de Herramientas Eléctricas DeWalt',
  description: 'Para los amantes del bricolaje y proyectos en casa. 3 dígitos.',
  digitCount: 3,
  ticketPrice: 11000,
  status: 'active',
  drawDate: new Date('2026-12-23T15:00:00Z'),
  winningTickets: [],
  ticketsRegistry: {
    '015': {
      status: 'reserved',
      buyerName: 'Rodrigo Silva',
      buyerPhone: '+573053334411',
      reservedAt: '2026-10-20T02:05:00Z',
    },
    '150': {
      status: 'paid',
      buyerName: 'Rigoberto Urán',
      buyerPhone: '+573118889900',
      reservedAt: '2026-10-18T08:00:00Z',
      paidAt: '2026-10-18T09:00:00Z',
    },
    '500': {
      status: 'reserved',
      buyerName: 'Nairo Quintana',
      buyerPhone: '+573102223344',
      reservedAt: '2026-10-20T01:30:00Z',
    },
  },
};

const raffles: Raffle[] = [
  raffle01,
  raffle02,
  raffle03,
  raffle04,
  raffle05,
  raffle06,
  raffle07,
  raffle08,
  raffle09,
  raffle10,
  raffle11,
  raffle12,
  raffle13,
  raffle14,
  raffle15,
];

const toSummary = (raffle: Raffle): RaffleSummary => ({
  id: raffle.id,
  name: raffle.name,
  digitCount: raffle.digitCount,
  ticketPrice: raffle.ticketPrice,
  status: raffle.status,
  drawDate: raffle.drawDate,
});

export const raffleSummaries: RaffleSummary[] = raffles.map(toSummary);

export const findRaffleByID = (id: string): Raffle | undefined => {
  return raffles.find((item) => item.id === id);
};
