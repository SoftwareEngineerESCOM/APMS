import {Workplace} from '../../workplace/classes/workplace';

export class AcademicProgram {
  id: number;
  name: string;
  titleName: string;
  workplace: Workplace;

  constructor(id?: number, name?: string, titleName?: string, workplace?: Workplace) {
    this.id = id;
    this.name = name;
    this.titleName = titleName;
    this.workplace = workplace ? workplace : new Workplace();
  }
}

