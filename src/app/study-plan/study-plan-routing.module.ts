import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateStudyPlanComponent} from './components/create-study-plan/create-study-plan.component';
import {UpdateStudyPlanComponent} from './components/update-study-plan/update-study-plan.component';
import {ReadStudyPlanComponent} from './components/read-study-plan/read-study-plan.component';
import {FindStudyPlanComponent} from './components/find-study-plan/find-study-plan.component';

const base = 'planesdeestudios/';

export const studyPlanRoutes: Routes = [
  {path: base + 'registrar', component: CreateStudyPlanComponent},
  {path: base + 'leer/:id', component: ReadStudyPlanComponent},
  {path: base + 'editar/:id', component: UpdateStudyPlanComponent},
  {path: base + 'consultar', component: FindStudyPlanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(studyPlanRoutes)],
  exports: [RouterModule]
})
export class StudyPlanRoutingModule {
}
