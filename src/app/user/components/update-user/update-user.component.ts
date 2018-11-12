import {Component, OnInit, ViewChild} from '@angular/core';
import {labels} from './update-user.strings';
import {UserFormComponent} from '../user-form/user-form.component';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../../../shared/services/rest.service';
import {RESTResponse} from '../../../shared/classes/rest-response';
import {User} from '../../classes/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  @ViewChild(UserFormComponent) userFormComponent: UserFormComponent;

  labels = labels;
  userId: string;

  constructor(private activatedRoute: ActivatedRoute, private rest: RestService) {
    this.userId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.rest.request('get', '/User/' + this.userId, undefined)
      .subscribe((response: RESTResponse) => {
        this.userFormComponent.initUserForm(response.payload as User);
      });
    /*setTimeout(() => {
      this.userFormComponent.initUserForm(
        {
          id: 0,
          token: '',
          password: '1234',
          isAccountBlocked: false,
          humanResource: {
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
          'roles': []
        }
      );
    }, 0);*/
  }

  submit() {
    this.rest.request('patch', 'User', this.userFormComponent.getUser());
    console.log('update:', this.userFormComponent.getUser());
  }

  cancel() {
  }

}
