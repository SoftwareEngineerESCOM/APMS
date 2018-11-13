import {Component} from '@angular/core';
import {RestService} from './shared/services/rest.service';
import {Position} from './position/classes/position';
import {Title} from './title/classes/title';
import {Workplace} from './workplace/classes/workplace';
import {WorkplaceType} from './workplace-type/classes/workplace-type';
import {UserService} from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'APMS';

  constructor(private rest: RestService) {
    /*console.log('aloo');
    for (const position of positions) {
      this.rest.request('post', 'Position', position).subscribe(response => {
        console.log(response);
      });
    }
    for (const title of titles) {
      this.rest.request('post', 'Title', title).subscribe(response => {
        console.log(response);
      });
    }
    for (const workplaceType of workplaceTypes) {
      this.rest.request('post', 'WorkplaceType', workplaceType).subscribe(response => {
        console.log(response);
        for (const workplace of workplaces) {
          this.rest.request('post', 'Workplace', workplace).subscribe(response2 => {
            console.log(response2);
          });
        }
      });
    }*/
  }

}


export const positions: Position[] = [
  new Position(1, 'Director', 'Dir.', 'Dirige'),
  new Position(2, 'Docente', 'Docen', 'Enseña'),
  new Position(3, 'Subdirector Academico', 'Sub. A.', 'Sudirije'),
  new Position(4, 'Analista (DES)', 'A', 'Analiza'),
  new Position(5, 'Analista (UA)', 'A', 'Analiza'),
  new Position(6, 'Jefe de departamento de desarrollo e inovacion curricular', '', ''),
  new Position(7, 'Jefe de departamento de innovacion educativa', '', ''),
  new Position(8, 'Jefe de departamento de inovacion academica', '', '')
];

export const titles: Title[] = [
  new Title(1, 'Ingeniero', 'Inge', 'Ingenia'),
  new Title(2, 'Doctor', 'Doc.', 'Ayuda'),
  new Title(3, 'Maestro en ciencias', 'M en C.', 'da catedra')
];

export const workplaces: Workplace[] = [
  new Workplace(0, 'DES', 'DES',
    new WorkplaceType(1, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(1, 'ESCOM', 'DES',
    new WorkplaceType(1, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(2, 'UPIITA', 'DES',
    new WorkplaceType(1, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(3, 'ESIA', 'DES',
    new WorkplaceType(1, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(4, 'ESCA', 'DES',
    new WorkplaceType(1, 'Unidad Academica', 'UA', 'escuela')),
  new Workplace(5, 'ENCB', 'DES',
    new WorkplaceType(1, 'Unidad Academica', 'UA', 'escuela'))
];

export const workplaceTypes = [
  new WorkplaceType(1, 'Unidad Academica', 'UA', 'escuela'),
  new WorkplaceType(2, 'Unidad Administrativa', 'UA', 'administracion')
];

export const humanResources = [
  {
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
];
