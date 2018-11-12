import {Component, Input, OnInit} from '@angular/core';
import {LearningUnitForm} from '../../classes/learning-unit-form';
import {labels} from './find-learning-unit.strings';

@Component({
  selector: 'app-find-learning-unit',
  templateUrl: './find-learning-unit.component.html',
  styleUrls: ['./find-learning-unit.component.scss']
})
export class FindLearningUnitComponent implements OnInit {

  @Input() semesterId: string;

  learningUnits = [
    new LearningUnitForm('...', '...', '...', '...', '...', '...', '...'),
    new LearningUnitForm('...', '...', '...', '...', '...', '...', '...'),
    new LearningUnitForm(),
    new LearningUnitForm(),
  ];

  displayedColumns = [
    'name',
    'TEPICCredits',
    'SATCACredits',
    'theoryHoursPerWeek',
    'practiceHoursPerWeek',
    'formationArea',
    'edit',
    'delete'
  ];

  labels = labels;

  constructor() {
  }

  delete(id) {
  }

  edit(id) {
  }

  ngOnInit() {
  }

}
