import {ComboBoxOption} from '../../../shared/classes/combo-box-option';
import {StudyPlan} from '../../classes/study-plan';
import {AcademicProgram} from '../../../academic-program/classes/academic-program';

export const labels = {
  notFound: '-- No se encontraron opciones --',
  title: 'PLANES DE ESTUDIO',
  academicProgram: 'Programa Academico',
  studyPlan: 'Plan de Estudios',
  mode: 'Modalidad',
  year: 'Año',
  id: 'Clave',
  edit: 'Editar'
};

export const placeholders = {
  search: 'Buscar...'
};

export const academicPrograms = [
  new ComboBoxOption(0, 'Ingenieria en Sistemas Computacionales'),
  new ComboBoxOption(1, 'Ingenieria en Sistemas Automotrices')
];

export const studyPlans = [
  new StudyPlan(0,
    2018,
    'Escolarizado',
    2.6,
    3.5,
    5.2,
    3.0,
    new AcademicProgram(0)
  ),
  new StudyPlan(0,
    2004,
    'Escolarizado',
    2.6,
    3.5,
    5.2,
    3.0,
    new AcademicProgram(0)
  ),
  new StudyPlan(0,
    2004,
    'No Escolarizado',
    2.6,
    3.5,
    5.2,
    3.0,
    new AcademicProgram(0)
  )
];
