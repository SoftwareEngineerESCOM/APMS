import {Component, OnInit, ViewChild} from '@angular/core';
import {labels} from './create-user.strings';
import {UserFormComponent} from '../user-form/user-form.component';
import {User} from '../../classes/user';
import {RestService} from '../../../shared/services/rest.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @ViewChild(UserFormComponent) userFormComponent: UserFormComponent;

  labels = labels;

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.userFormComponent.initUserForm(new User());
  }

  submit() {
    const us = this.userFormComponent.getUser() as User;
    us.roles = [];
    us.id = us.humanResource.id;
    console.log('usasdfds', us);
    this.rest.request('post', 'User', us)
      .subscribe(response => {
        console.log(response);
      });
    console.log('create', this.userFormComponent.getUser());
  }

  cancel() {
  }
}
