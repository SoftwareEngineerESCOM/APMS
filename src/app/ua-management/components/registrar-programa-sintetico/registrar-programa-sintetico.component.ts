import { Component, OnInit } from '@angular/core';
import {labels} from './strings';
import {FormBuilder, Validators} from '@angular/forms';
import {SelectDataModel} from '../../../utils/components/select-form-control/classes/SelectDataModel';
import {SelectOptionModel} from '../../../utils/components/select-form-control/classes/SelectOptionModel';
import {of} from 'rxjs';

@Component({
  selector: 'app-registrar-programa-sintetico',
  templateUrl: './registrar-programa-sintetico.component.html',
  styleUrls: ['./registrar-programa-sintetico.component.scss']
})
export class RegistrarProgramaSinteticoComponent implements OnInit {
  labels = labels;
  fb: FormBuilder;
  private auOptions: SelectOptionModel[] = [];
  private apOptions: SelectOptionModel[] = [];
  private luOptions: SelectOptionModel[] = [];
  private sOptions: SelectOptionModel[] = [];
  auSelect: SelectDataModel = new SelectDataModel(this.labels.academicUnit, of(this.auOptions));
  apSelect: SelectDataModel = new SelectDataModel(this.labels.academicProgram, of(this.apOptions));
  luSelect: SelectDataModel = new SelectDataModel(this.labels.learningUnit, of(this.luOptions));
  sSelect: SelectDataModel = new SelectDataModel(this.labels.semester, of(this.sOptions));

  constructor() {

  }

  ngOnInit() {
  }
  setAu(val)
  {

  }
  setAp(val){

  }
  setLu(val){}
  setS(val){}
  onSubmit() {

  }

}
