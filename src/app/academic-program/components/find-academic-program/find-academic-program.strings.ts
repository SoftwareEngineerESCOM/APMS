import {ComboBoxOption} from '../../../shared/classes/combo-box-option';
import {AcademicProgram} from '../../classes/academic-program';
import {Workplace} from '../../../workplace/classes/workplace';
import {WorkplaceType} from '../../../workplace-type/classes/workplace-type';

export const labels = {
  notFound: '-- No se encontraron opciones --',
  title: 'PROGRAMAS ACADEMICOS',
  workplace: 'Unidad Academica',
  academicProgram: 'Programa Academico',
  name: 'Nombre',
  id: 'Clave',
  edit: 'Editar'
};

export const placeholders = {
  search: 'Buscar...'
};

export const academicUnits: Workplace[] = [
  new Workplace(0, 'DES', 'DES',
    new WorkplaceType(0, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(1, 'ESCOM', 'DES',
    new WorkplaceType(0, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(2, 'UPIITA', 'DES',
    new WorkplaceType(0, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(3, 'ESIA', 'DES',
    new WorkplaceType(0, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(4, 'ESCA', 'DES',
    new WorkplaceType(0, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(5, 'ENCB', 'DES',
    new WorkplaceType(0, 'Unidad Academica', 'UA', 'escuela'))
];

export const academicPrograms = [
  new AcademicProgram(0, 'Ingenieria en Sistemas Computacionales', 'Ingeniero en Sistemas Computacionales'),
  new AcademicProgram(1, 'Ingenieria en Sistemas Automotrices', 'Ingeniero en Sistemas Automotrices')
];
