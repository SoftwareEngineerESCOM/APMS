import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {labels, placeholders} from './study-plan-form.strings';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {FormService} from '../../../shared/services/form.service';
import {RestService} from '../../../shared/services/rest.service';
import {AcademicProgram} from '../../../academic-program/classes/academic-program';
import {UserService} from '../../../shared/services/user.service';
import {StudyPlan} from '../../classes/study-plan';
import {StudyPlanMode} from '../../../study-plan-mode/classes/study-plan-mode';

@Component({
  selector: 'app-study-plan-form',
  templateUrl: './study-plan-form.component.html',
  styleUrls: ['./study-plan-form.component.scss']
})
export class StudyPlanFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<boolean>();
  @Input() showIdField: boolean;
  @Input() method: string;

  labels = labels;
  placeholders = placeholders;

  modes: StudyPlanMode[];
  filteredModes: Observable<StudyPlanMode[]>;

  academicPrograms: AcademicProgram[];
  filteredAcademicPrograms: Observable<AcademicProgram[]>;

  searchModesCtrl = new FormControl();
  searchAcademicProgramCtrl = new FormControl();


  studyPlanForm: FormGroup;

  constructor(private formService: FormService, private rest: RestService, private userService: UserService) {
    this.studyPlanForm = this.formService.createFormFromObject(new StudyPlan());
  }

  ngOnInit() {
  }

  getAcademicProgramsByWorkplaceId() {
    this.rest.request('get', 'AcademicProgram/AcademicProgramsByWorkPlaceId/' + this.userService.getWorkplace().id,
      undefined)
      .subscribe(response => {
        this.academicPrograms = response.payload as AcademicProgram[];
        this.filteredAcademicPrograms = this.formService.getFilteredItems(this.searchAcademicProgramCtrl, this.academicPrograms);
        const defaultComboBoxOption = this.academicPrograms.find(opt => opt.id === this.studyPlanForm.get('academicProgram').value['id']);
        this.studyPlanForm.get('academicProgram').setValue(defaultComboBoxOption);
      });
  }

  getModes() {
    this.rest.request('get', 'StudyPlanMode', undefined)
      .subscribe(response => {
        this.modes = response.payload as StudyPlanMode[];
        this.filteredModes = this.formService.getFilteredItems(this.searchModesCtrl, this.modes);
        console.log('qqqq', this.studyPlanForm.value);
        const defaultComboBoxOption = this.modes.find(opt => opt.id === this.studyPlanForm.get('mode').value['id']);
        this.studyPlanForm.get('mode').setValue(defaultComboBoxOption);
      });
  }

  getStudyPlan(): StudyPlan {
    return this.studyPlanForm.value as StudyPlan;
  }

  initStudyPlanForm(studyPlan: StudyPlan) {
    this.studyPlanForm = this.formService.createFormFromObject(studyPlan);
    this.getModes();
    this.getAcademicProgramsByWorkplaceId();
  }

}
