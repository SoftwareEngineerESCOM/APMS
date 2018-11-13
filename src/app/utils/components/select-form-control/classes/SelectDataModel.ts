import {Observable} from 'rxjs';
import {SelectDataModelInterface, SelectOptionModelInterface} from '../interfaces/select-data-model';

export class SelectDataModel implements SelectDataModelInterface {
  disabled: boolean;
  placeholder: string;
  valueSelected: string;
  options$: Observable<SelectOptionModelInterface[]>;

  constructor(placeholder: string, options: Observable<SelectOptionModelInterface[]>, valSelectd: string = null) {
    this.placeholder = placeholder;
    this.valueSelected = valSelectd;
    this.disabled = false;
    this.options$ = options;
  }

}
