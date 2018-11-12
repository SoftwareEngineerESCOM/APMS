import {Component, Input, OnInit} from '@angular/core';
import {labels, placeholders} from './find-user.strings';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {FormService} from '../../../shared/services/form.service';
import {User} from '../../classes/user';
import {MatTableDataSource} from '@angular/material';
import {Position} from '../../../position/classes/position';
import {RestService} from '../../../shared/services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.scss']
})
export class FindUserComponent implements OnInit {

  @Input() academicUnitId = 0;

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

  users: User[];
  usersDataSource: MatTableDataSource<User>;

  constructor(private formService: FormService, private rest: RestService, private router: Router) {
  }

  ngOnInit() {
    this.usersDataSource = new MatTableDataSource<User>(this.users);
    this.filteredPositions = this.formService.getFilteredItems(this.searchPositionsCtrl, this.positions);
    this.getUsers();
    this.getPositions();
    this.form = new FormGroup({
      position: new FormControl({}, Validators.required)
    });
  }

  getUsers() {
    this.rest.request('get', 'User', undefined).subscribe(response => {
      this.users = response.payload as User[];
      this.usersDataSource = new MatTableDataSource<User>(this.users);
    });
  }

  getPositions() {
    this.rest.request('get', 'Position', undefined).subscribe(response => {
      this.positions = response.payload as Position[];
    });
  }

  getUsersByPositionId(positionId) {
    this.rest.request('get', 'User/UsersByPositionId/' + positionId, undefined).subscribe(response => {
      this.users = response.payload as User[];
    });
  }

  submit() {
  }

  edit(id) {
    this.router.navigate(['/usuarios/editar' + id]);
    console.log('edit: ' + id);
  }

  view(id) {
    console.log('view: ' + id);
  }

  add() {
    this.router.navigate(['/usuarios/registrar']);
    console.log('add');
  }

  delete(id) {
    this.rest.request('delete', 'User/' + id, undefined).subscribe(response => {
      console.log(response);
      this.getUsers();
    });
    console.log('delete: ' + id);
  }

}
