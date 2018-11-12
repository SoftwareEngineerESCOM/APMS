import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {FormService} from '../../../shared/services/form.service';
import {RestService} from '../../../shared/services/rest.service';
import {formationAreas, labels, placeholders, semesters} from './learning-unit-form.strings';
import {LearningUnitForm} from '../../classes/learning-unit-form';
import {ComboBoxOption} from '../../../shared/classes/combo-box-option';

@Component({
  selector: 'app-learning-unit-form',
  templateUrl: './learning-unit-form.component.html',
  styleUrls: ['./learning-unit-form.component.scss']
})
export class LearningUnitFormComponent implements OnInit {

  @Input() showIdField: boolean;
  @Input() method: string;

  labels = labels;
  placeholders = placeholders;

  semesters: ComboBoxOption[];
  formationAreas: ComboBoxOption[];



  filteredFormationAreas: Observable<ComboBoxOption[]>;
  filteredSemesters: Observable<ComboBoxOption[]>;

  searchFormationAreaCtrl = new FormControl();
  searchSemesterCtrl = new FormControl();


  learningUnitForm: FormGroup;

  constructor(private formService: FormService, private restService: RestService) {
    this.learningUnitForm = this.formService.createFormFromObject(new LearningUnitForm());
  }

  ngOnInit() {
    this.semesters = semesters;
    this.filteredFormationAreas = this.formService.getFilteredItems(this.searchFormationAreaCtrl, this.formationAreas);
    this.formationAreas = formationAreas;
    this.filteredSemesters = this.formService.getFilteredItems(this.searchSemesterCtrl, this.semesters);
  }

  submit() {
    console.log(this.learningUnitForm.value);
    this.restService.request('www.example.com/ua/', this.learningUnitForm.value, this.method);
  }

  setId(id: string) {
    this.learningUnitForm.get('id').setValue(id);
  }

}
