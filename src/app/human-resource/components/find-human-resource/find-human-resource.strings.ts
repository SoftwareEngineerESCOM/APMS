import {Position} from '../../../position/classes/position';

export const labels = {
  notFound: '-- No se encontraron opciones --',
  pagetitle: 'RECURSOS HUMANOS',
  id: 'Matricula',
  name: 'Nombre',
  firstSurname: 'Primer Apellido',
  secondSurname: 'Segundo Apellido',
  title: 'Título',
  position: 'Cargo',
  workplace: 'Lugar de trabajo',
  edit: 'Editar',
  delete: 'Eliminar',
  search: 'Buscar'
};

export const placeholders = {
  search: 'Buscar...'
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

export const workplaces = [
  {
    'id': 0,
    'name': 'ESCUELA SUPERIOR DE COMPUTO',
    'abbreviation': 'ESCOM.',
    'workplaceType': {
      'id': 0,
      'name': 'UNIDAD ACADEMICA',
      'abbreviation': 'UA.',
      'description': 'SE RIFA.'
    }
  },
  {
    'id': 1,
    'name': 'ESCUELA SUPERIOR DE COMPUTO',
    'abbreviation': 'ESCOM.',
    'workplaceType': {
      'id': 0,
      'name': 'UNIDAD ACADEMICA',
      'abbreviation': 'UA.',
      'description': 'SE RIFA.'
    }
  },
  {
    'id': 1,
    'name': 'ESCUELA SUPERIOR DE COMPUTO',
    'abbreviation': 'ESCOM.',
    'workplaceType': {
      'id': 0,
      'name': 'UNIDAD ACADEMICA',
      'abbreviation': 'UA.',
      'description': 'SE RIFA.'
    }
  }
];

export const humanResources = [
  {
    'id': 1,
    'name': 'Sergio',
    'firstSurname': 'Sanchez',
    'secondSurname': 'Valencia',
    'title': {
      'id': 0,
      'name': 'Ingeniero',
      'abbreviation': 'Ing.',
      'description': 'Se las ingenia.'
    },
    'position': {
      'id': 0,
      'name': 'Estudiante',
      'abbreviation': 'Estd.',
      'description': 'Se las ingenia x2.'
    },
    'workplace': {
      'id': 1,
      'name': 'ESCUELA SUPERIOR DE COMPUTO',
      'abbreviation': 'ESCOM.',
      'workplaceType': {
        'id': 0,
        'name': 'UNIDAD ACADEMICA',
        'abbreviation': 'UA.',
        'description': 'SE RIFA.'
      }
    }
  },
  {
    'id': 1,
    'name': 'Sergio',
    'firstSurname': 'Sanchez',
    'secondSurname': 'Valencia',
    'title': {
      'id': 0,
      'name': 'Ingeniero',
      'abbreviation': 'Ing.',
      'description': 'Se las ingenia.'
    },
    'position': {
      'id': 0,
      'name': 'Estudiante',
      'abbreviation': 'Estd.',
      'description': 'Se las ingenia x2.'
    },
    'workplace': {
      'id': 1,
      'name': 'ESCUELA SUPERIOR DE COMPUTO',
      'abbreviation': 'ESCOM.',
      'workplaceType': {
        'id': 0,
        'name': 'UNIDAD ACADEMICA',
        'abbreviation': 'UA.',
        'description': 'SE RIFA.'
      }
    }
  },
  {
    'id': 1,
    'name': 'Sergio',
    'firstSurname': 'Sanchez',
    'secondSurname': 'Valencia',
    'title': {
      'id': 0,
      'name': 'Ingeniero',
      'abbreviation': 'Ing.',
      'description': 'Se las ingenia.'
    },
    'position': {
      'id': 0,
      'name': 'Estudiante',
      'abbreviation': 'Estd.',
      'description': 'Se las ingenia x2.'
    },
    'workplace': {
      'id': 1,
      'name': 'ESCUELA SUPERIOR DE COMPUTO',
      'abbreviation': 'ESCOM.',
      'workplaceType': {
        'id': 0,
        'name': 'UNIDAD ACADEMICA',
        'abbreviation': 'UA.',
        'description': 'SE RIFA.'
      }
    }
  }
];
