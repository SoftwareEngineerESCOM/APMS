import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateHumanResourceComponent} from './components/create-human-resource/create-human-resource.component';
import {FindHumanResourceComponent} from './components/find-human-resource/find-human-resource.component';
import {UpdateHumanResourceComponent} from './components/update-human-resource/update-human-resource.component';
import {ReadHumanResourceComponent} from './components/read-human-resource/read-human-resource.component';
import {CreateAcademicProgramComponent} from '../academic-program/components/create-academic-program/create-academic-program.component';
import {AuthGuardService} from '../auth/services/auth-guard.service';

const base = 'recursoshumanos/';

export const humanResourceRoutes: Routes = [
  {path: base + 'registrar', component: CreateHumanResourceComponent, canActivate: [AuthGuardService]},
  {path: base + 'consultar', component: FindHumanResourceComponent, canActivate: [AuthGuardService]},
  {path: base + 'editar/:id', component: UpdateHumanResourceComponent, canActivate: [AuthGuardService]},
  {path: base + 'leer', component: ReadHumanResourceComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(humanResourceRoutes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule {
}
