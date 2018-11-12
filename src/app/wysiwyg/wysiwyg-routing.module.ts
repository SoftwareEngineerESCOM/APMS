import {EditorComponent} from './components/editor/editor.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


export const wysiwygRoutes: Routes = [
  { path: 'editor', component: EditorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(wysiwygRoutes)],
  exports: [RouterModule]
})
export class WYSIWYGRoutingModule {
}
