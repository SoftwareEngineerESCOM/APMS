import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../../../shared/services/rest.service';

@Component({
  selector: 'app-read-academic-program',
  templateUrl: './read-academic-program.component.html',
  styleUrls: ['./read-academic-program.component.scss']
})
export class ReadAcademicProgramComponent implements OnInit {

  academicProgramId: number;
  constructor(private activatedRoute: ActivatedRoute, private rest: RestService) {
    this.academicProgramId = parseInt(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
