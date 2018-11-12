import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HumanResourceRoutingModule} from './human-resource-routing.module';
import {CreateHumanResourceComponent} from './components/create-human-resource/create-human-resource.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AutoFocusModule} from '../shared/modules/auto-focus/auto-focus.module';
import {HumanResourceFormComponent} from './components/human-resource-form/human-resource-form.component';
import {FindHumanResourceComponent} from './components/find-human-resource/find-human-resource.component';
import { UpdateHumanResourceComponent } from './components/update-human-resource/update-human-resource.component';
import { ReadHumanResourceComponent } from './components/read-human-resource/read-human-resource.component';

@NgModule({
  imports: [
    CommonModule,
    HumanResourceRoutingModule,
    AutoFocusModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    CreateHumanResourceComponent,
    HumanResourceFormComponent,
    FindHumanResourceComponent,
    UpdateHumanResourceComponent,
    ReadHumanResourceComponent
  ],
  exports: [
    HumanResourceFormComponent,
    FindHumanResourceComponent
  ]
})
export class HumanResourceModule {
}
