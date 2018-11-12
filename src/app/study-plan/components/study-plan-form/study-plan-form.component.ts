import {Component, Input, OnInit} from '@angular/core';
import {academicPrograms, labels, modes, placeholders} from './study-plan-form.strings';
import {Observable} from 'rxjs';
import {ComboBoxOption} from '../../../shared/classes/combo-box-option';
import {FormControl, FormGroup} from '@angular/forms';
import {FormService} from '../../../shared/services/form.service';
import {RestService} from '../../../shared/services/rest.service';
import {StudyPlanForm} from '../../classes/study-plan-form';

@Component({
  selector: 'app-study-plan-form',
  templateUrl: './study-plan-form.component.html',
  styleUrls: ['./study-plan-form.component.scss']
})
export class StudyPlanFormComponent implements OnInit {

  @Input() showIdField: boolean;
  @Input() method: string;

  labels = labels;
  placeholders = placeholders;

  modes = modes;
  academicPrograms = academicPrograms;

  filteredModes: Observable<ComboBoxOption[]>;
  filteredAcademicPrograms: Observable<ComboBoxOption[]>;

  searchModesCtrl = new FormControl();
  academicProgramsCtrl = new FormControl();


  studyPlanForm: FormGroup;

  constructor(private formService: FormService, private restService: RestService) {
    this.studyPlanForm = this.formService.createFormFromObject(new StudyPlanForm());
  }

  ngOnInit() {
    this.filteredModes = this.formService.getFilteredItems(this.searchModesCtrl, this.modes);
    this.filteredAcademicPrograms = this.formService.getFilteredItems(this.academicProgramsCtrl, this.academicPrograms);
  }

  submit() {
    console.log(this.studyPlanForm.value);
    this.restService.request('www.example.com/ua/', this.studyPlanForm.value, this.method);
  }

  setId(id: string) {
    this.studyPlanForm.controls['id'].setValue(id);
  }

}
