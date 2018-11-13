import {APP_NAME} from '../../../../environments/environment';

export const labels = {
  appName: APP_NAME
};

class SubOption {
  description: string;
  path: string;

  constructor(description, path) {
    this.description = description;
    this.path = path;
  }
}

class Option {
  description: string;
  path: string;
  icon: string;
  hasSuboptions: boolean;
  suboptions: SubOption[];

  constructor(description, path, icon, hasSuboptions, suboptions) {
    this.description = description;
    this.path = path;
    this.icon = icon;
    this.hasSuboptions = hasSuboptions;
    this.suboptions = suboptions;
  }
}

export const menu = {
  options: [
    new Option('Ver Tareas', undefined, 'chevron_right', false, []),
    new Option('Gestionar Programas Academicos', '', 'expand_more', true,
      [
        new SubOption('Consultar', '/programasacademicos/consultar'),
        new SubOption('Registrar', '/programasacademicos/registrar'),
        new SubOption('Editar', '/programasacademicos/editar/1'),
        new SubOption('Leer', '/programasacademicos/leer')
      ]),
    new Option('Gestionar Planes de Estudio', '', 'expand_more', true,
      [
        new SubOption('Consultar', '/planesdeestudios/consultar'),
        new SubOption('Registrar', '/planesdeestudios/registrar'),
        new SubOption('Editar', '/planesdeestudios/editar/1'),
        new SubOption('Leer', '/planesdeestudios/leer/1')
      ]),
    new Option('Gestionar Unidades de aprendizaje', undefined, 'expand_more', true,
      [
        new SubOption('Consultar', '/ua/consultar'),
        new SubOption('Registrar', '/ua/crear'),
        new SubOption('Editar', '/ua/actualizar'),
        new SubOption('Leer', '/ua/leer')
      ]),
    new Option('Gestionar Usuarios', '', 'expand_more', true,
      [
        new SubOption('Consultar', '/usuarios/consultar'),
        new SubOption('Registrar', '/usuarios/registrar'),
        new SubOption('Editar', '/usuarios/editar/1'),
        new SubOption('Leer', '/usuarios/leer')
      ]),
    new Option('Gestionar Recursos Humanos', '', 'expand_more', true,
      [
        new SubOption('Consultar', '/recursoshumanos/consultar'),
        new SubOption('Registrar', '/recursoshumanos/registrar'),
        new SubOption('Editar', '/recursoshumanos/editar/1'),
        new SubOption('Leer', '/recursoshumanos/leer')
      ]),
    new Option('Salir', '/login', 'exit_to_app', false, [])
  ]
};


