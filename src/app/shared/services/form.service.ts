import {Injectable} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) {
  }

  getDefaultValue(property: any): any {
    switch (typeof property) {
      case 'string':
        return [''];
      case 'number':
        return [0];
      case 'boolean':
        return [false];
    }
    return [''];
  }

  createFormFromObject(model: Object) {
    console.log('model: ', model);
    const groupObject = {};
    for (const key of Object.keys(model)) {
      if (typeof model[key] === 'undefined') {
        // groupObject[key] = this.createFormFromObject(model[key]);
        groupObject[key] = this.getDefaultValue(model[key]);
      } else {
        groupObject[key] = model[key];
      }
    }
    return this.formBuilder.group(groupObject);
  }


  getFilteredItems(formControl: FormControl, items: Object[]): Observable<any> {
    return formControl.valueChanges
      .pipe(
        startWith(''),
        map(input => {
            return items.filter(
              item => {
                for (const [key, value] of Object.entries(item)) {
                  if (typeof value === 'string' || typeof value === 'number') {
                    if (value.toString().toLowerCase().includes(input.toLowerCase())) {
                      return true;
                    }
                  }
                }
                return false;
              });
          }
        ));
  }
}
