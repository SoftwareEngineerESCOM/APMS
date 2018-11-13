import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrarProgramaSinteticoComponent} from './components/registrar-programa-sintetico/registrar-programa-sintetico.component';

export const UaManagementRoutes: Routes = [
  {path: 'RPS', component: RegistrarProgramaSinteticoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(UaManagementRoutes)],
  exports: [RouterModule]
})
export class UaManagementRoutingModule { }
