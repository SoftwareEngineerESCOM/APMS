import {ComboBoxOption} from '../../../shared/classes/combo-box-option';

export const labels = {
  notFound: '-- No se encontraron opciones --',
  academicProgram: 'Programa Academico',
  year: 'Año',
  mode: 'Modalidad',
  totalTEPICCredits: 'Creditos Totales TEPIC',
  totalSATCACredits: 'Creditos Totales SATCA',
  totalTheoryHours: 'Total Horas/Teoría',
  totalPracticeHours: 'Total Horas/Práctica'
};

export const placeholders = {
  search: 'Buscar...',
  year: '2008',
  mode: 'Escolarizada',
  totalTEPICCredits: '2.3',
  totalSATCACredits: '1.8',
  totalTheoryHours: '16',
  totalPracticeHours: '9'
};

export const modes = [
  new ComboBoxOption(0, 'Escolarizada'),
  new ComboBoxOption(1, 'No Escolarizada'),
  new ComboBoxOption(2, 'Mixta')
];

export const academicPrograms = [
  new ComboBoxOption(0, 'Ingenieria en Sistemas Computacionales'),
  new ComboBoxOption(1, 'Ingenieria en Sistemas Automotrices')
];
