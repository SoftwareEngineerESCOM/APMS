import {Component, OnInit} from '@angular/core';
import {labels} from './update-study-plan.strings';

@Component({
  selector: 'app-update-study-plan',
  templateUrl: './update-study-plan.component.html',
  styleUrls: ['./update-study-plan.component.scss']
})
export class UpdateStudyPlanComponent implements OnInit {

  labels = labels;

  constructor() {
  }

  ngOnInit() {
  }

}
