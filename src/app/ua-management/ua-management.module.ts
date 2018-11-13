import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UaManagementRoutingModule } from './ua-management-routing.module';
import { RegistrarProgramaSinteticoComponent } from './components/registrar-programa-sintetico/registrar-programa-sintetico.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../shared/modules/material/material.module';
import {UtilsModule} from '../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    UtilsModule,
    UaManagementRoutingModule
  ],
  declarations: [RegistrarProgramaSinteticoComponent]
})
export class UaManagementModule { }


