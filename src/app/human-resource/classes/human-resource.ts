import {Title} from '../../title/classes/title';
import {Position} from '../../position/classes/position';
import {Workplace} from '../../workplace/classes/workplace';

export class HumanResource {
  id: number;
  name: string;
  firstSurname: string;
  secondSurname: string;
  title: Title;
  position: Position;
  workplace: Workplace;

  constructor(id?: number, name?: string, firstSurname?: string, secondSurname?: string,
              title?: Title, position?: Position, workplace?: Workplace) {
    this.id = id;
    this.name = name;
    this.firstSurname = firstSurname;
    this.secondSurname = secondSurname;
    this.title = title ? title : new Title();
    this.position = position ? position: new Position();
    this.workplace = workplace ? workplace : new Workplace();
  }
}
