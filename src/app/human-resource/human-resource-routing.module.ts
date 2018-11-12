import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateHumanResourceComponent} from './components/create-human-resource/create-human-resource.component';
import {FindHumanResourceComponent} from './components/find-human-resource/find-human-resource.component';
import {UpdateHumanResourceComponent} from './components/update-human-resource/update-human-resource.component';
import {ReadHumanResourceComponent} from './components/read-human-resource/read-human-resource.component';

const base = 'recursoshumanos/';

export const humanResourceRoutes: Routes = [
  {path: base + 'registrar', component: CreateHumanResourceComponent},
  {path: base + 'consultar', component: FindHumanResourceComponent},
  {path: base + 'editar/:id', component: UpdateHumanResourceComponent},
  {path: base + 'leer', component: ReadHumanResourceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(humanResourceRoutes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule {
}
