import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectDataModel} from './classes/SelectDataModel';



@Component({
  selector: 'app-select-form-control',
  templateUrl: './select-form-control.component.html',
  styleUrls: ['./select-form-control.component.scss']
})
export class SelectFormControlComponent implements OnInit {
  @Input() selectDataObject: SelectDataModel;

  @Output()
  onValueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  returnVal(val)
  {
    this.onValueChange.emit(val);
  }

}
