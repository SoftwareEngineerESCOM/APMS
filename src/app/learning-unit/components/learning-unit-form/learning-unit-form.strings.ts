import {ComboBoxOption} from '../../../shared/classes/combo-box-option';

export const labels = {
  notFound: '-- No se encontraron opciones --',
  name: 'Nombre',
  TEPICCredits: 'Creditos TEPIC',
  SATCACredits: 'Creditos SATCA',
  theoryHoursPerWeek: 'Horas de teoría por semana',
  practiceHoursPerWeek: 'Horas de práctica por semana',
  formationArea: 'Area de formación',
  semester: 'Semestre',
};

export const placeholders = {
  search: 'Buscar...',
  name: 'Algoritmos',
  TEPICCredits: '2.5',
  SATCACredits: '2.1',
  theoryHoursPerWeek: '1',
  practiceHoursPerWeek: '2',
  formationArea: 'Institucional',
  semester: '1'
};

export const formationAreas = [
  new ComboBoxOption(0, 'Institucional'),
  new ComboBoxOption(1, 'Cientifica Basica'),
  new ComboBoxOption(2, 'Profesional'),
  new ComboBoxOption(3, 'Terminal y de Integracion')
];

export const semesters = [
  new ComboBoxOption(0, '1'),
  new ComboBoxOption(1, '2'),
  new ComboBoxOption(2, '3'),
  new ComboBoxOption(3, '4'),
  new ComboBoxOption(4, '5'),
  new ComboBoxOption(5, '6')
];
