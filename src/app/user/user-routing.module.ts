import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './components/create-user/create-user.component';
import {UpdateUserComponent} from './components/update-user/update-user.component';
import {ReadUserComponent} from './components/read-user/read-user.component';
import {FindUserComponent} from './components/find-user/find-user.component';

const base = 'usuarios/';

export const userRoutes: Routes = [
  {path: base + 'registrar', component: CreateUserComponent},
  {path: base + 'consultar', component: FindUserComponent},
  {path: base + 'editar/:id', component: UpdateUserComponent},
  {path: base + 'leer', component: ReadUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
