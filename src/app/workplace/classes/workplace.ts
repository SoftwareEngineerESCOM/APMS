import {WorkplaceType} from '../../workplace-type/classes/workplace-type';

export class Workplace {
  id: number;
  name: string;
  abbreviation: string;
  workplaceType: WorkplaceType;

  constructor(id?: number, name?: string, abbreviation?: string, workPlaceType?: WorkplaceType) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.abbreviation = abbreviation ? abbreviation : '';
    this.workplaceType = workPlaceType ? workPlaceType : new WorkplaceType();
  }
}
