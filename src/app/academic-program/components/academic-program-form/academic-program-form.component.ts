import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {labels, placeholders} from './academic-program-form.strings';
import {FormGroup} from '@angular/forms';
import {FormService} from '../../../shared/services/form.service';
import {AcademicProgram} from '../../classes/academic-program';
import {RestService} from '../../../shared/services/rest.service';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-academic-program-form',
  templateUrl: './academic-program-form.component.html',
  styleUrls: ['./academic-program-form.component.scss']
})
export class AcademicProgramFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<boolean>();

  labels = labels;
  placeholders = placeholders;

  academicProgramForm: FormGroup;

  constructor(private formService: FormService, private userService: UserService) {
  }

  ngOnInit() {
    this.academicProgramForm = this.formService.createFormFromObject(new AcademicProgram());
  }

  getAcademicProgram(): AcademicProgram {
    const academicProgram = this.academicProgramForm.value as AcademicProgram;
    academicProgram.workplace = this.userService.getWorkplace();
    return this.academicProgramForm.value as AcademicProgram;
  }

  initAcademicProgramForm(academicProgram: AcademicProgram) {
    this.academicProgramForm = this.formService.createFormFromObject(academicProgram);
  }

}
