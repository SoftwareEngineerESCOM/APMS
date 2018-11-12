import {Component, Input, OnInit} from '@angular/core';
import {labels, placeholders, studyPlans} from './find-study-plan.strings';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {FormService} from '../../../shared/services/form.service';
import {StudyPlan} from '../../classes/study-plan';
import {RestService} from '../../../shared/services/rest.service';
import {AcademicProgram} from '../../../academic-program/classes/academic-program';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-find-study-plan',
  templateUrl: './find-study-plan.component.html',
  styleUrls: ['./find-study-plan.component.scss']
})
export class FindStudyPlanComponent implements OnInit {

  @Input() academicProgramId: number;

  labels = labels;
  placeholders = placeholders;

  searchAcademicProgramCtrl = new FormControl();

  form = new FormGroup({
    academicProgram: new FormControl({disabled: true}, Validators.required)
  });

  academicPrograms: AcademicProgram[];
  filteredAcademicPrograms: Observable<AcademicProgram[]>;

  displayedColumns = [
    'id',
    'year',
    'mode',
    'edit'
  ];

  studyPlans: StudyPlan[];

  constructor(private formService: FormService, private rest: RestService, private userService: UserService) {
    this.form = new FormGroup({
      academicProgram: new FormControl()
    });
  }

  ngOnInit() {
    this.getAcademicProgramsByWorkplaceId();
    this.getStudyPlansByAcademicProgramId();
  }

  getAcademicProgramsByWorkplaceId() {
    this.rest.request('get', 'AcademicProgram/AcademicProgramsByWorkplaceId/' + this.userService.getWorkplace().id,
      undefined)
      .subscribe(response => {
        this.academicPrograms = response.payload as AcademicProgram[];
        this.filteredAcademicPrograms = this.formService.getFilteredItems(this.searchAcademicProgramCtrl, this.academicPrograms);
        const defaultComboBoxOption = this.academicPrograms.find(opt => opt.id === this.academicProgramId);
        this.form = new FormGroup({
          academicProgram: new FormControl({value: defaultComboBoxOption, disabled: true}, Validators.required)
        });
      });
  }

  getStudyPlansByAcademicProgramId() {
    this.rest.request('get', 'StudyPlan/StudyPlansByAcademicProgramId/' + this.academicProgramId, undefined)
      .subscribe(response => {
        console.log(response);
        this.studyPlans = response.payload as StudyPlan[];
      });
  }

  submit() {
  }

  edit(id) {
    console.log('edit: ' + id);
  }

  view(id) {
    console.log('view: ' + id);
  }

  add() {
    console.log('add');
  }

}
