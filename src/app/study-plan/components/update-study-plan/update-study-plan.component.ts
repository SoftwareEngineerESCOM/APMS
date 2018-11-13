import {Component, OnInit, ViewChild} from '@angular/core';
import {labels} from './update-study-plan.strings';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {StudyPlanFormComponent} from '../study-plan-form/study-plan-form.component';
import {RestService} from '../../../shared/services/rest.service';
import {StudyPlan} from '../../classes/study-plan';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-study-plan',
  templateUrl: './update-study-plan.component.html',
  styleUrls: ['./update-study-plan.component.scss']
})
export class UpdateStudyPlanComponent implements OnInit {

  labels: FormContainerLabels = labels;
  @ViewChild(StudyPlanFormComponent) studyPlanFormComponent: StudyPlanFormComponent;
  studyPlanId: number;

  constructor(private rest: RestService, private activatedRoute: ActivatedRoute) {
    this.studyPlanId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.rest.request('get', 'StudyPlan/' + this.studyPlanId, undefined)
      .subscribe(response => {
        this.studyPlanFormComponent.initStudyPlanForm(response.payload as StudyPlan);
      });
  }

  submit() {
    this.rest.request('patch', 'StudyPlan', this.studyPlanFormComponent.getStudyPlan())
      .subscribe(response => {
        console.log(response);
      });
    console.log(this.studyPlanFormComponent.getStudyPlan());
  }

  cancel() {
  }
}
