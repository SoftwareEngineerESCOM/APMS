import {Component, OnInit} from '@angular/core';
import {labels} from './create-learning-unit.strings';

@Component({
  selector: 'app-create-learning-unit',
  templateUrl: './create-learning-unit.component.html',
  styleUrls: ['./create-learning-unit.component.scss']
})
export class CreateLearningUnitComponent implements OnInit {

  labels = labels;

  constructor() {
  }

  ngOnInit() {
  }

}
