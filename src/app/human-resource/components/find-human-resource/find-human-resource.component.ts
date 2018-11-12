import {Component, Input, OnInit} from '@angular/core';
import {labels, placeholders} from './find-human-resource.strings';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../shared/services/form.service';
import {Observable} from 'rxjs';
import {HumanResource} from '../../classes/human-resource';
import {Position} from '../../../position/classes/position';
import {MatTableDataSource} from '@angular/material';
import {RestService} from '../../../shared/services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-human-resource',
  templateUrl: './find-human-resource.component.html',
  styleUrls: ['./find-human-resource.component.scss']
})
export class FindHumanResourceComponent implements OnInit {

  @Input() workplaceId = 0;

  labels = labels;
  placeholders = placeholders;

  searchPositionsCtrl = new FormControl();

  form: FormGroup;

  positions: Position[];
  filteredPositions: Observable<Position[]>;

  displayedColumns = [
    'id',
    'name',
    'firstSurname',
    'secondSurname',
    'title',
    'position',
    'workplace',
    'edit',
    'delete'
  ];

  humanResources: HumanResource[];
  humanResourcesDataSource: MatTableDataSource<HumanResource>;

  constructor(private formService: FormService, private rest: RestService, private router: Router) {
  }

  ngOnInit() {
    this.humanResourcesDataSource = new MatTableDataSource<HumanResource>(this.humanResources);
    this.getHumanResources();
    this.getPositions();
    this.form = new FormGroup({
      position: new FormControl({}, Validators.required)
    });
  }

  getPositions() {
    this.rest.request('get', 'Position', undefined).subscribe(response => {
      this.positions = response.payload as Position[];
      this.filteredPositions = this.formService.getFilteredItems(this.searchPositionsCtrl, this.positions);
    });
  }

  getHumanResources() {
    this.rest.request('get', 'HumanResource', undefined).subscribe(response => {
      this.humanResources = response.payload as HumanResource[];
      this.humanResourcesDataSource = new MatTableDataSource<HumanResource>(this.humanResources);
    });
  }

  getHumanResourcesByPositionId(positionId) {
    this.rest.request('get', 'HumanResource/HumanResourcesByPositionId/' + positionId, undefined).subscribe(response => {
      this.humanResources = response.payload as HumanResource[];
    });
  }

  edit(id) {
    this.router.navigate(['/recursoshumanos/' + id]);
  }

  view(id) {
    console.log('view: ' + id);
  }

  add() {
    this.router.navigate(['/recursoshumanos/registrar']);
  }

  delete(id) {
    this.rest.request('delete', 'HumanResource/' + id, undefined).subscribe(response => {
      console.log(response);
      this.getHumanResources();
    });
  }

}
