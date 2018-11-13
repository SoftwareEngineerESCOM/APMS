import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UaPackagesRoutingModule} from './ua-packages-routing.module';
import { ShowUaComponent } from './components/show-ua/show-ua.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {UtilsModule} from '../utils/utils.module';



@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    UaPackagesRoutingModule,
    MaterialModule
  ],
  declarations: [ShowUaComponent]
})
export class UaPackagesModule { }
