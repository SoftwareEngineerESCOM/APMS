import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HumanResourceModule} from '../human-resource/human-resource.module';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ReadUserComponent } from './components/read-user/read-user.component';
import { FindUserComponent } from './components/find-user/find-user.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HumanResourceModule
  ],
  declarations: [
    CreateUserComponent,
    UserFormComponent,
    UpdateUserComponent,
    ReadUserComponent,
    FindUserComponent
  ]
})
export class UserModule { }
