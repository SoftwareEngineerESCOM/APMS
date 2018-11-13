import {Component, OnInit, ViewChild} from '@angular/core';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {labels} from './create-study-plan.strings';
import {StudyPlanFormComponent} from '../study-plan-form/study-plan-form.component';
import {RestService} from '../../../shared/services/rest.service';
import {StudyPlan} from '../../classes/study-plan';

@Component({
  selector: 'app-create-study-plan',
  templateUrl: './create-study-plan.component.html',
  styleUrls: ['./create-study-plan.component.scss']
})
export class CreateStudyPlanComponent implements OnInit {

  labels: FormContainerLabels = labels;
  @ViewChild(StudyPlanFormComponent) studyPlanFormComponent: StudyPlanFormComponent;

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.studyPlanFormComponent.initStudyPlanForm(new StudyPlan());
  }

  submit() {
    this.rest.request('post', 'StudyPlan', this.studyPlanFormComponent.getStudyPlan())
      .subscribe(response => {
        console.log(response);
      });
    console.log(this.studyPlanFormComponent.getStudyPlan());
  }

  cancel() {
  }

}
