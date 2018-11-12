import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemesterRoutingModule } from './semester-routing.module';
import { ReadSemesterComponent } from './components/read-semester/read-semester.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {LearningUnitModule} from '../learning-unit/learning-unit.module';
import { FindSemesterComponent } from './components/find-semester/find-semester.component';

@NgModule({
  imports: [
    CommonModule,
    SemesterRoutingModule,
    MaterialModule,
    LearningUnitModule
  ],
  declarations: [
    ReadSemesterComponent,
    FindSemesterComponent
  ],
  exports: [
    ReadSemesterComponent,
    FindSemesterComponent
  ]
})
export class SemesterModule { }
