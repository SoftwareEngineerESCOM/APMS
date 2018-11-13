import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {labels, placeholders} from './user-form.strings';
import {FormGroup} from '@angular/forms';
import {FormService} from '../../../shared/services/form.service';
import {User} from '../../classes/user';
import {HumanResourceFormComponent} from '../../../human-resource/components/human-resource-form/human-resource-form.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() showIdField: boolean;
  @Output() onSubmit = new EventEmitter<boolean>();

  @ViewChild(HumanResourceFormComponent) humanResourceFormComponent: HumanResourceFormComponent;
  labels = labels;
  placeholders = placeholders;
  userForm: FormGroup;

  constructor(private formService: FormService) {
    this.userForm = this.formService.createFormFromObject(new User());
  }

  ngOnInit() {
  }

  getUser(): User {
    this.userForm.get('humanResource').setValue(this.humanResourceFormComponent.getHumanResource());
    return this.userForm.value as User;
  }

  initUserForm(user: User) {
    console.log('user', user);
    this.humanResourceFormComponent.initHumanResourceForm(user.humanResource);
    this.userForm = this.formService.createFormFromObject(user);
  }

}
