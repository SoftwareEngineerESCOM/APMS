import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyPlanRoutingModule } from './study-plan-routing.module';
import { StudyPlanFormComponent } from './components/study-plan-form/study-plan-form.component';
import { CreateStudyPlanComponent } from './components/create-study-plan/create-study-plan.component';
import { UpdateStudyPlanComponent } from './components/update-study-plan/update-study-plan.component';
import { ReadStudyPlanComponent } from './components/read-study-plan/read-study-plan.component';
import { FindStudyPlanComponent } from './components/find-study-plan/find-study-plan.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {SemesterModule} from '../semester/semester.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    StudyPlanRoutingModule,
    SemesterModule
  ],
  declarations: [
    StudyPlanFormComponent,
    CreateStudyPlanComponent,
    UpdateStudyPlanComponent,
    ReadStudyPlanComponent,
    FindStudyPlanComponent]
})
export class StudyPlanModule { }
