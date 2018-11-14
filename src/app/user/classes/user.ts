import {HumanResource} from '../../human-resource/classes/human-resource';
import {Role} from '../../role/classes/role';

export class User {
  id: number;
  token: string;
  password: string;
  isAccountBlocked: boolean;
  humanResource: HumanResource;
  roles: Role[];

  constructor(id?: number, token?: string, password?: string, isAccountBlocked?: boolean,
              humanResource?: HumanResource, roles?: Role[]) {
    this.id = id ? id : 0;
    this.token = token ? token : '';
    this.password = password ? password : '';
    this.isAccountBlocked = isAccountBlocked ? isAccountBlocked : false;
    this.humanResource = humanResource ? humanResource : new HumanResource();
    this.roles = roles ? roles : [];
  }
}
