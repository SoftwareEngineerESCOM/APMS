import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LearningUnitRoutingModule} from './learning-unit-routing.module';
import {CreateLearningUnitComponent} from './components/create-learning-unit/create-learning-unit.component';
import {UpdateLearningUnitComponent} from './components/update-learning-unit/update-learning-unit.component';
import {LearningUnitFormComponent} from './components/learning-unit-form/learning-unit-form.component';
import {FindLearningUnitComponent} from './components/find-learning-unit/find-learning-unit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../shared/modules/material/material.module';
import {ReadLearningUnitComponent} from './components/read-learning-unit/read-learning-unit.component';

@NgModule({
  imports: [
    CommonModule,
    LearningUnitRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    CreateLearningUnitComponent,
    ReadLearningUnitComponent,
    UpdateLearningUnitComponent,
    FindLearningUnitComponent,
    LearningUnitFormComponent,
  ],
  exports: [
    ReadLearningUnitComponent,
    FindLearningUnitComponent
  ]
})
export class LearningUnitModule {
}
