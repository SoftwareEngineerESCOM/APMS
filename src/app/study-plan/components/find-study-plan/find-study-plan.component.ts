import {Component, Input, OnInit} from '@angular/core';
import {labels, placeholders, studyPlans} from './find-study-plan.strings';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {FormService} from '../../../shared/services/form.service';
import {StudyPlan} from '../../classes/study-plan';
import {RestService} from '../../../shared/services/rest.service';
import {AcademicProgram} from '../../../academic-program/classes/academic-program';
import {UserService} from '../../../shared/services/user.service';
import {Router} from '@angular/router';

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

  form: FormGroup;

  academicPrograms: AcademicProgram[];
  filteredAcademicPrograms: Observable<AcademicProgram[]>;

  displayedColumns = [
    'id',
    'year',
    'mode',
    'edit'
  ];

  studyPlans: StudyPlan[];

  constructor(private formService: FormService, private rest: RestService, private userService: UserService,
              private router: Router) {
    this.form = new FormGroup({
      academicProgram: new FormControl({})
    });
  }

  ngOnInit() {
    this.getAcademicProgramsByWorkplaceId();
    this.getStudyPlansByAcademicProgramId(this.academicProgramId);
  }

  getAcademicProgramsByWorkplaceId() {
    this.rest.request('get', 'AcademicProgram/AcademicProgramsByWorkPlaceId/' + this.userService.getWorkplace().id,
      undefined)
      .subscribe(response => {
        this.academicPrograms = response.payload as AcademicProgram[];
        this.filteredAcademicPrograms = this.formService.getFilteredItems(this.searchAcademicProgramCtrl, this.academicPrograms);
        const defaultComboBoxOption = this.academicPrograms.find(opt => opt.id === this.academicProgramId);
        this.form = new FormGroup({
          academicProgram: new FormControl({value: defaultComboBoxOption, disabled: true})
        });
      });
  }

  getStudyPlansByAcademicProgramId(academicProgramId) {
    this.rest.request('get', 'StudyPlan/StudyPlansByAcademicProgramId/' + academicProgramId, undefined)
      .subscribe(response => {
        console.log(response);
        this.studyPlans = response.payload as StudyPlan[];
      });
  }

  submit() {
  }

  edit(id) {
    this.router.navigate(['planesdeestudios/editar/' + id])
    console.log('edit: ' + id);
  }

  view(id) {
    this.router.navigate(['planesdeestudios/leer/' + id]);
    console.log('view: ' + id);
  }

  add() {
    this.router.navigate(['planesdeestudios/registrar']);
    console.log('add');
  }

}
