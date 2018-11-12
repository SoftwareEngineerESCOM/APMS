import {SelectOptionModelInterface} from '../../shared/interfaces/select-data-model';

export class SelectOptionModel implements SelectOptionModelInterface {
  value: string;
  viewValue: string;

  constructor(val: string = null, viewVal: string = null) {
    this.value = val;
    this.viewValue = viewVal;
  }
}
