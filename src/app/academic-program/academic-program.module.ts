import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicProgramRoutingModule } from './academic-program-routing.module';
import { CreateAcademicProgramComponent } from './components/create-academic-program/create-academic-program.component';
import { UpdateAcademicProgramComponent } from './components/update-academic-program/update-academic-program.component';
import { ReadAcademicProgramComponent } from './components/read-academic-program/read-academic-program.component';
import { AcademicProgramFormComponent } from './components/academic-program-form/academic-program-form.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FindAcademicProgramComponent } from './components/find-academic-program/find-academic-program.component';
import {StudyPlanModule} from '../study-plan/study-plan.module';

@NgModule({
  imports: [
    CommonModule,
    AcademicProgramRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StudyPlanModule
  ],
  declarations: [
    CreateAcademicProgramComponent,
    UpdateAcademicProgramComponent,
    ReadAcademicProgramComponent,
    AcademicProgramFormComponent,
    FindAcademicProgramComponent
  ]
})
export class AcademicProgramModule { }
