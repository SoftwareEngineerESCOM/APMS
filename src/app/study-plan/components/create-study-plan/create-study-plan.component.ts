import { Component, OnInit } from '@angular/core';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {labels} from './create-study-plan.strings';

@Component({
  selector: 'app-create-study-plan',
  templateUrl: './create-study-plan.component.html',
  styleUrls: ['./create-study-plan.component.scss']
})
export class CreateStudyPlanComponent implements OnInit {

  labels: FormContainerLabels = labels;

  constructor() { }

  ngOnInit() {
  }

}
