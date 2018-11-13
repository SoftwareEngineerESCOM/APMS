import {Observable} from 'rxjs';

export interface SelectDataModelInterface {
  disabled: boolean;
  placeholder: string
  valueSelected: string;
  options$: Observable<SelectOptionModelInterface[]>;
}

export interface SelectOptionModelInterface {
  value: any;
  viewValue: string;
}
