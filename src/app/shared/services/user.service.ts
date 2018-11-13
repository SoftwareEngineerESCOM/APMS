import {Injectable} from '@angular/core';
import {User} from '../../user/classes/user';
import {Workplace} from '../../workplace/classes/workplace';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user: User;

  constructor() {
    this.user = us;
  }

  initUser(user: User) {
    this.user = user;
  }

  getToken() {
    return this.user.token;
  }

  getWorkplace(): Workplace {
    return this.user.humanResource.workplace;
  }
}

const us: User = {
  id: 1,
  token: '',
  password: '',
  isAccountBlocked: false,
  roles: [],
  humanResource: {
    id: 1,
    name: 'Sergio',
    firstSurname: 'Sanchez',
    secondSurname: 'Valencia',
    title: {
      id: 1,
      name: 'Ingeniero',
      abbreviation: 'Ing.',
      description: 'Se las ingenia.'
    },
    position: {
      id: 1,
      name: 'Estudiante',
      abbreviation: 'Estd.',
      description: 'Se las ingenia x2.'
    },
    workplace: {
      id: 1,
      name: 'ESCUELA SUPERIOR DE COMPUTO',
      abbreviation: 'ESCOM.',
      workplaceType: {
        id: 1,
        name: 'UNIDAD ACADEMICA',
        abbreviation: 'UA.',
        description: 'SE RIFA.'
      }
    }
  }
};
