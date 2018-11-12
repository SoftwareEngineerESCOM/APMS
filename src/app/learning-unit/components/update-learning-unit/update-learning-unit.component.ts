import {Component, OnInit} from '@angular/core';
import {labels} from './update-learning-unit.strings';

@Component({
  selector: 'app-update-learning-unit',
  templateUrl: './update-learning-unit.component.html',
  styleUrls: ['./update-learning-unit.component.scss']
})
export class UpdateLearningUnitComponent implements OnInit {

  labels = labels;

  constructor() {
  }

  ngOnInit() {
  }

}
