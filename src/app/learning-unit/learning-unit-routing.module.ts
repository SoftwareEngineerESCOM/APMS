import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateLearningUnitComponent} from './components/create-learning-unit/create-learning-unit.component';
import {UpdateLearningUnitComponent} from './components/update-learning-unit/update-learning-unit.component';
import {ReadLearningUnitComponent} from './components/read-learning-unit/read-learning-unit.component';
import {FindLearningUnitComponent} from './components/find-learning-unit/find-learning-unit.component';

const base = 'ua/';

export const learningUnitRoutes: Routes = [
  {path: base + 'crear', component: CreateLearningUnitComponent},
  {path: base + 'consultar', component: FindLearningUnitComponent},
  {path: base + 'actualizar', component: UpdateLearningUnitComponent},
  {path: base + 'leer', component: ReadLearningUnitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(learningUnitRoutes)],
  exports: [RouterModule]
})
export class LearningUnitRoutingModule {
}
