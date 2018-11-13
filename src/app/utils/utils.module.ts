import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFormControlComponent } from './components/select-form-control/select-form-control.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [SelectFormControlComponent],
  declarations: [SelectFormControlComponent]
})
export class UtilsModule { }
