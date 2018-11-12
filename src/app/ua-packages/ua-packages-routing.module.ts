
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShowUaComponent} from './components/show-ua/show-ua.component';


export const UaPackagesRoutes: Routes = [
  {path: 'showUa', component: ShowUaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(UaPackagesRoutes)],
  exports: [RouterModule]
})
export class UaPackagesRoutingModule {
}
