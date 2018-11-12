import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor.component';
import {WYSIWYGRoutingModule} from './wysiwyg-routing.module';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    WYSIWYGRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  declarations: [EditorComponent],
  exports: []
})
export class WYSIWYGModule {
}


