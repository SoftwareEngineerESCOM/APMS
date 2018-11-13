import {Component, Input, OnInit} from '@angular/core';
import {labels, placeholders} from './find-academic-program.strings';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {FormService} from '../../../shared/services/form.service';
import {AcademicProgram} from '../../classes/academic-program';
import {RestService} from '../../../shared/services/rest.service';
import {Workplace} from '../../../workplace/classes/workplace';
import {Router} from '@angular/router';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-find-academic-program',
  templateUrl: './find-academic-program.component.html',
  styleUrls: ['./find-academic-program.component.scss']
})
export class FindAcademicProgramComponent implements OnInit {

  @Input() academicUnitId = 0;

  labels = labels;
  placeholders = placeholders;

  searchAcademicUnitCtrl = new FormControl();

  form: FormGroup;

  academicUnits: Workplace[];
  filteredAcademicUnits: Observable<Workplace[]>;

  displayedColumns = [
    'id',
    'name',
    'edit'
  ];

  academicPrograms: AcademicProgram[];

  constructor(private formService: FormService, private rest: RestService, private router: Router,
              private userService: UserService) {
    this.form = new FormGroup({
      workplace: new FormControl({value: 0, disabled: true})
    });
  }

  ngOnInit() {
    this.getAcademicUnits();
    this.getAcademicProgramsByWorkplaceId(this.userService.getWorkplace().id);
  }

  getAcademicUnits() {
    this.rest.request('get', 'Workplace', undefined)
      .subscribe(response => {
        this.academicUnits = response.payload as Workplace[];
        this.filteredAcademicUnits = this.formService.getFilteredItems(this.searchAcademicUnitCtrl, this.academicUnits);
        const defaultComboBoxOption = this.academicUnits.find(opt => opt.id === this.userService.getWorkplace().id);
        this.form = new FormGroup({
          workplace: new FormControl({value: defaultComboBoxOption, disabled: true})
        });
      });
  }

  getAcademicProgramsByWorkplaceId(workplaceId) {
    this.rest.request('get', 'AcademicProgram/AcademicProgramsByWorkPlaceId/' + workplaceId,
      undefined).subscribe(response => {
      this.academicPrograms = response.payload as AcademicProgram[];
    });
  }

  submit() {
  }

  edit(id) {
    this.router.navigate(['programasacademicos/editar/' + id]);
  }

  view(id) {
    this.router.navigate(['programasacademicos/leer/' + id]);
  }

  add() {
    this.router.navigate(['programasacademicos/registrar']);
    console.log('add');
  }

}
