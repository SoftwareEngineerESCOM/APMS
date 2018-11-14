import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateStudyPlanComponent} from './components/create-study-plan/create-study-plan.component';
import {UpdateStudyPlanComponent} from './components/update-study-plan/update-study-plan.component';
import {ReadStudyPlanComponent} from './components/read-study-plan/read-study-plan.component';
import {FindStudyPlanComponent} from './components/find-study-plan/find-study-plan.component';
import {CreateAcademicProgramComponent} from '../academic-program/components/create-academic-program/create-academic-program.component';
import {AuthGuardService} from '../auth/services/auth-guard.service';

const base = 'planesdeestudios/';

export const studyPlanRoutes: Routes = [
  {path: base + 'registrar', component: CreateStudyPlanComponent, canActivate: [AuthGuardService]},
  {path: base + 'leer/:id', component: ReadStudyPlanComponent, canActivate: [AuthGuardService]},
  {path: base + 'editar/:id', component: UpdateStudyPlanComponent, canActivate: [AuthGuardService]},
  {path: base + 'consultar', component: FindStudyPlanComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(studyPlanRoutes)],
  exports: [RouterModule]
})
export class StudyPlanRoutingModule {
}
