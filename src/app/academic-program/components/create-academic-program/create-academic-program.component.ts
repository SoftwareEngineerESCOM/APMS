import {Component, OnInit, ViewChild} from '@angular/core';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {labels} from './create-academic-program.strings';
import {RestService} from '../../../shared/services/rest.service';
import {AcademicProgramFormComponent} from '../academic-program-form/academic-program-form.component';
import {AcademicProgram} from '../../classes/academic-program';

@Component({
  selector: 'app-create-academic-program',
  templateUrl: './create-academic-program.component.html',
  styleUrls: ['./create-academic-program.component.scss']
})
export class CreateAcademicProgramComponent implements OnInit {

  labels: FormContainerLabels = labels;
  @ViewChild(AcademicProgramFormComponent) academicProgramFormComponent: AcademicProgramFormComponent;

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.academicProgramFormComponent.initAcademicProgramForm(new AcademicProgram());
  }

  submit() {
    this.rest.request('post', 'AcademicProgram', this.academicProgramFormComponent.getAcademicProgram());
    console.log(this.academicProgramFormComponent.getAcademicProgram());
  }

  cancel() {
  }

}
