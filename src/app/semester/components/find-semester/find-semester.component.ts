import {Component, Input, OnInit} from '@angular/core';
import {Semester} from '../../classes/semester';

@Component({
  selector: 'app-find-semester',
  templateUrl: './find-semester.component.html',
  styleUrls: ['./find-semester.component.scss']
})
export class FindSemesterComponent implements OnInit {

  @Input() studyPlanId: string;

  semesters = [
    new Semester(0, 1),
    new Semester(1, 2),
    new Semester(2, 3)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
