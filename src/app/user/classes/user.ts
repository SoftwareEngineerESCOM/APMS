import {HumanResource} from '../../human-resource/classes/human-resource';
import {Role} from '../../role/classes/role';

export class User {
  id: number;
  token: string;
  password: string;
  isAccountBlocked: boolean;
  humanResource: HumanResource;
  roles: Role[];

  constructor(id?: number, token?: string, password?: string, isAccountActive?: boolean,
              humanResource?: HumanResource, roles?: Role[]) {
    this.id = id;
    this.token = token;
    this.password = password;
    this.isAccountBlocked = isAccountActive;
    this.humanResource = humanResource ? humanResource : new HumanResource();
    this.roles = roles;
  }
}
