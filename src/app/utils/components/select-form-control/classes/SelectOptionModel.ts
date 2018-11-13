import {SelectOptionModelInterface} from '../interfaces/select-data-model';

export class SelectOptionModel implements SelectOptionModelInterface {
  value: any;
  viewValue: string;

  constructor(val: any = null, viewVal: string = null) {
    this.value = val;
    this.viewValue = viewVal;
  }
}
