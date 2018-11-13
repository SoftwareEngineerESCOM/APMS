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
    this.rest.request('get', 'User/' + this.userId, undefined)
      .subscribe((response: RESTResponse) => {
        console.log('userrest', response);
        this.userFormComponent.initUserForm(response.payload as User);
      });
  }

  submit() {
    this.rest.request('patch', 'User', this.userFormComponent.getUser())
      .subscribe(response => {
        console.log(response);
      });
    console.log('update:', this.userFormComponent.getUser());
  }

  cancel() {
  }

}
