import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {labels, placeholders} from './human-resource-form.strings';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {FormService} from '../../../shared/services/form.service';
import {Workplace} from '../../../workplace/classes/workplace';
import {Position} from '../../../position/classes/position';
import {Title} from '../../../title/classes/title';
import {HumanResource} from '../../classes/human-resource';
import {RestService} from '../../../shared/services/rest.service';

@Component({
  selector: 'app-human-resource-form',
  templateUrl: './human-resource-form.component.html',
  styleUrls: ['./human-resource-form.component.scss']
})
export class HumanResourceFormComponent implements OnInit {

  @Input() showIdField = true;
  @Output() onSubmit = new EventEmitter<boolean>();

  labels = labels;
  placeholders = placeholders;

  titles: Title[];
  positions: Position[];
  workplaces: Workplace[];

  filteredTitles: Observable<Title[]>;
  filteredPositions: Observable<Position[]>;
  filteredWorkplaces: Observable<Workplace[]>;

  searchTitlesCtrl = new FormControl();
  searchPositionsCtrl = new FormControl();
  searchWorkplacesCtrl = new FormControl();

  humanResourceForm: FormGroup;

  constructor(private formService: FormService, private rest: RestService) {
    this.humanResourceForm = this.formService.createFormFromObject(new HumanResource());
  }

  ngOnInit() {
  }

  getPositions() {
    this.rest.request('get', 'Position', undefined).subscribe(response => {
      this.positions = response.payload as Position[];
      this.filteredPositions = this.formService.getFilteredItems(this.searchPositionsCtrl, this.positions);
      const positionOpt = this.positions.find(opt => opt.id === this.humanResourceForm.get('position').value['id']);
      this.humanResourceForm.get('position').setValue(positionOpt);
    });
  }

  getTitles() {
    this.rest.request('get', 'Title', undefined).subscribe(response => {
      this.titles = response.payload as Title[];
      this.filteredTitles = this.formService.getFilteredItems(this.searchTitlesCtrl, this.titles);
      const titleOpt = this.titles.find(opt => opt.id === this.humanResourceForm.get('title').value['id']);
      this.humanResourceForm.get('title').setValue(titleOpt);
    });
  }

  getWorkplaces() {
    this.rest.request('get', 'Workplace', undefined).subscribe(response => {
      this.workplaces = response.payload as Workplace[];
      this.filteredWorkplaces = this.formService.getFilteredItems(this.searchWorkplacesCtrl, this.workplaces);
      const workplaceOpt = this.workplaces.find(opt => opt.id === this.humanResourceForm.get('workplace').value['id']);
      this.humanResourceForm.get('workplace').setValue(workplaceOpt);
    });
  }

  initHumanResourceForm(humanResource: HumanResource) {
    this.humanResourceForm = this.formService.createFormFromObject(humanResource);
    this.getPositions();
    this.getTitles();
    this.getWorkplaces();
  }

  getHumanResource(): HumanResource {
    return this.humanResourceForm.value as HumanResource;
  }
}
