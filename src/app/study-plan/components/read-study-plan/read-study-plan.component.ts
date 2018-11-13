import {Component, OnInit} from '@angular/core';
import {labels} from './read-study-plan.strings';
import {StudyPlan} from '../../classes/study-plan';
import {AcademicProgram} from '../../../academic-program/classes/academic-program';
import {Workplace} from '../../../workplace/classes/workplace';
import {StudyPlanMode} from '../../../study-plan-mode/classes/study-plan-mode';

@Component({
  selector: 'app-read-study-plan',
  templateUrl: './read-study-plan.component.html',
  styleUrls: ['./read-study-plan.component.scss']
})
export class ReadStudyPlanComponent implements OnInit {

  labels = labels;

  studyPlan = new StudyPlan(0,
    2018,
    2.6,
    3.5,
    5.2,
    3.0,
    new AcademicProgram(
      0,
      'Ingenieria en Sistemas Computacionales',
      'Ingeniero en Sistemas Computacionales',
      new Workplace(0, 'Escuela Superior de Computo', 'ESCOM')
    ),
    new StudyPlanMode(1, 'Escolarizado', 'Va a la escuela')
  );

  studyPlanSource = [
    this.studyPlan
  ];

  displayedColumns = [
    'year',
    'mode',
    'totalTEPICCredits',
    'totalSATCACredits',
    'totalTheoryHours',
    'totalPracticeHours',
    'edit'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  edit() {
  }

}
