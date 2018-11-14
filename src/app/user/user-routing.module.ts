import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './components/create-user/create-user.component';
import {UpdateUserComponent} from './components/update-user/update-user.component';
import {ReadUserComponent} from './components/read-user/read-user.component';
import {FindUserComponent} from './components/find-user/find-user.component';
import {CreateAcademicProgramComponent} from '../academic-program/components/create-academic-program/create-academic-program.component';
import {AuthGuardService} from '../auth/services/auth-guard.service';

const base = 'usuarios/';

export const userRoutes: Routes = [
  {path: base + 'registrar', component: CreateUserComponent, canActivate: [AuthGuardService]},
  {path: base + 'consultar', component: FindUserComponent, canActivate: [AuthGuardService]},
  {path: base + 'editar/:id', component: UpdateUserComponent, canActivate: [AuthGuardService]},
  {path: base + 'leer', component: ReadUserComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
