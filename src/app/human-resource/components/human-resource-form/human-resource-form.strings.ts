import {Position} from '../../../position/classes/position';
import {Title} from '../../../title/classes/title';
import {Workplace} from '../../../workplace/classes/workplace';
import {WorkplaceType} from '../../../workplace-type/classes/workplace-type';

export const labels = {
  notFound: '-- No se encontraron opciones --',
  id: 'Matricula',
  password: 'Contraseña',
  snackBarMessage: 'Credenciales Incorrectas',
  snackBarAction: 'Omitir',
  name: 'Nombre',
  firstSurname: 'Primer Apellido',
  secondSurname: 'Segundo Apellido',
  title: 'Título',
  position: 'Cargo',
  workplace: 'Lugar de trabajo'
};

export const placeholders = {
  search: 'Buscar...',
  id: '2014090123',
  password: '********',
  name: 'Juan',
  firstSurname: 'Garcia',
  secondSurname: 'Vazquez',
  title: 'Ingeniero',
  position: 'Docente',
  workplace: 'DES'
};


export const positions: Position[] = [
  new Position(0, 'Director', 'Dir.', 'Dirige'),
  new Position(1, 'Docente', 'Docen', 'Enseña'),
  new Position(2, 'Subdirector Academico', 'Sub. A.', 'Sudirije'),
  new Position(3, 'Analista (DES)', 'A', 'Analiza'),
  new Position(4, 'Analista (UA)', 'A', 'Analiza'),
  new Position(5, 'Jefe de departamento de desarrollo e inovacion curricular', ''),
  new Position(6, 'Jefe de departamento de innovacion educativa'),
  new Position(7, 'Jefe de departamento de inovacion academica')
];

export const titles: Title[] = [
  new Title(0, 'Ingeniero', 'Inge', 'Ingenia'),
  new Title(1, 'Doctor', 'Doc.', 'Ayuda'),
  new Title(2, 'Maestro en ciencias', 'M en C.', 'da catedra')
];

export const workplaces: Workplace[] = [
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
