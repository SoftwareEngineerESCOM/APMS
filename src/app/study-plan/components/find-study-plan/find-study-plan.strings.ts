import {ComboBoxOption} from '../../../shared/classes/combo-box-option';
import {StudyPlan} from '../../classes/study-plan';
import {AcademicProgram} from '../../../academic-program/classes/academic-program';
import {StudyPlanMode} from '../../../study-plan-mode/classes/study-plan-mode';

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
    2.6,
    3.5,
    5.2,
    3.0,
    new AcademicProgram(1),
    new StudyPlanMode(1, 'Escolarizado', 'Va a la escuela')
  ),
  new StudyPlan(0,
    2004,
    2.6,
    3.5,
    5.2,
    3.0,
    new AcademicProgram(0),
    new StudyPlanMode(1, 'Escolarizado', 'Va a la escuela')
  ),
  new StudyPlan(0,
    2004,
    2.6,
    3.5,
    5.2,
    3.0,
    new AcademicProgram(0),
    new StudyPlanMode(1, 'No Escolarizado', 'Va a la escuela')
  )
];
