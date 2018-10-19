import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from '../shared/modules/material.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutofocusDirective} from '../shared/directives/autofocus.directive';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    AutofocusDirective
  ]
})
export class AuthModule {
}
