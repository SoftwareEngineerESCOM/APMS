import { Component, OnInit } from '@angular/core';
import {labels} from './show-ua.strings';
import {Observable, of} from 'rxjs';
import {SelectDataModel} from '../../../utils/components/select-form-control/classes/SelectDataModel';
import {SelectOptionModel} from '../../../utils/components/select-form-control/classes/SelectOptionModel';
import {LearningUnitInfo} from '../../classes/LearningUnitInfo';
import {ActionButton} from '../../classes/ActionButton';
import {LocalStorage} from '../../../shared/classes/LocalStorage';

@Component({
  selector: 'app-show-ua',
  templateUrl: './show-ua.component.html',
  styleUrls: ['./show-ua.component.scss']
})
export class ShowUaComponent implements OnInit {

  labels;
  selectArray: SelectDataModel[];
  tableHeader: string[];
  uaInfo$: Observable<LearningUnitInfo[]>;
  tableContent: LearningUnitInfo[];
  selectUnidadAcademica: SelectDataModel;
  selectProgramaAcademico: SelectDataModel;
  selectSemestre: SelectDataModel;
  selectNoRevision: SelectDataModel;
  selectUnidadAprendizaje: SelectDataModel;
  selectAnalista: SelectDataModel;
  optionsAnalista: SelectOptionModel[];
  optionsUnidadAprendizaje: SelectOptionModel[];
  optionsUnidadAcademica: SelectOptionModel[];
  optionsProgramaAcademico: SelectOptionModel[];
  optionsSemestre: SelectOptionModel[];
  optionsNoRevision: SelectOptionModel[];
  rowActns: ActionButton[];



  constructor() {

    this.labels = labels;
    this.selectArray = [];
    // Table Content init
    this.tableContent = [];
    this.uaInfo$ = of(this.tableContent);
    // Table's row actions buttons init
    this.rowActns = [];
    // Combobox options init
    this.optionsUnidadAcademica = [];
    this.optionsProgramaAcademico = [];
    this.optionsSemestre = [];
    this.optionsNoRevision = [];
    this.optionsUnidadAprendizaje = [];
    this.optionsAnalista = [];
    // Setting up da selects
    this.selectUnidadAcademica = new SelectDataModel(this.labels.placeholderUA, of(this.optionsUnidadAcademica));
    this.selectProgramaAcademico =  new SelectDataModel(this.labels.placeholderPA, of(this.optionsProgramaAcademico));
    this.selectSemestre = new SelectDataModel(this.labels.placeholderS, of(this.optionsSemestre));
    this.selectNoRevision = new SelectDataModel(this.labels.placeholderNR, of(this.optionsNoRevision));
    this.selectUnidadAprendizaje = new SelectDataModel(this.labels.placeholderUAp, of(this.optionsUnidadAprendizaje));
    this.selectAnalista = new SelectDataModel(this.labels.placeholderAnalystName, of(this.optionsAnalista));
    // Filters
    this.selectArray.push(
      this.selectUnidadAcademica,
      this.selectProgramaAcademico,
      this.selectSemestre,
      this.selectNoRevision,
    );
    this.tableHeader = labels.tableHeader;
  }

  ngOnInit() {
    this.rowActns.push(
      new ActionButton('Eliminar', this.deleteContentWithId),
      new ActionButton('Confirmar', function (id) {
        alert('confirmar alert');
      })
    );
  }
  addUaInf(uaID: string, date: string, analID: string) {
    const nRow = new LearningUnitInfo(null, uaID, date, analID, 'Progresando...');
    LocalStorage.saveObject('test', nRow);
    this.tableContent.push(nRow);
  }

  clearFields(...fields: HTMLInputElement[]) {
    for ( const field of fields) {
      field.value = null;
    }
  }

  deleteContentWithId(id: string = null) {
    alert('hola mundo' + id);
  }

}
