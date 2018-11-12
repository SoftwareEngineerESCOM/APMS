import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReadSemesterComponent} from './components/read-semester/read-semester.component';
import {FindSemesterComponent} from './components/find-semester/find-semester.component';

const base = 'semestre/';

export const semesterRoutes: Routes = [
  {path: base + 'crear', component: ReadSemesterComponent},
  {path: base + 'consultar', component: FindSemesterComponent},
  {path: base + 'actualizar', component: ReadSemesterComponent},
  {path: base + 'leer', component: ReadSemesterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(semesterRoutes)],
  exports: [RouterModule]
})
export class SemesterRoutingModule { }
