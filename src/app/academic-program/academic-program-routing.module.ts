import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAcademicProgramComponent} from './components/create-academic-program/create-academic-program.component';
import {ReadAcademicProgramComponent} from './components/read-academic-program/read-academic-program.component';
import {UpdateAcademicProgramComponent} from './components/update-academic-program/update-academic-program.component';
import {FindAcademicProgramComponent} from './components/find-academic-program/find-academic-program.component';


const base = 'programasacademicos/';

export const academicProgramRoutes: Routes = [
  {path: base + 'registrar', component: CreateAcademicProgramComponent},
  {path: base + 'consultar', component: FindAcademicProgramComponent},
  {path: base + 'editar/:id', component: UpdateAcademicProgramComponent},
  {path: base + 'leer', component: ReadAcademicProgramComponent}
];

@NgModule({
  imports: [RouterModule.forChild(academicProgramRoutes)],
  exports: [RouterModule]
})
export class AcademicProgramRoutingModule { }
