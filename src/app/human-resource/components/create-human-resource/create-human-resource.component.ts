import {Component, OnInit, ViewChild} from '@angular/core';
import {labels} from './create-human-resource.strings';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {HumanResourceFormComponent} from '../human-resource-form/human-resource-form.component';
import {RestService} from '../../../shared/services/rest.service';
import {HumanResource} from '../../classes/human-resource';

@Component({
  selector: 'app-create',
  templateUrl: './create-human-resource.component.html',
  styleUrls: ['./create-human-resource.component.scss']
})
export class CreateHumanResourceComponent implements OnInit {

  labels: FormContainerLabels = labels;
  @ViewChild(HumanResourceFormComponent) humanResourceFormComponent: HumanResourceFormComponent;

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.humanResourceFormComponent.initHumanResourceForm(new HumanResource());
  }

  submit() {
    this.rest.request('post', 'HumanResource', this.humanResourceFormComponent.getHumanResource());
    console.log(this.humanResourceFormComponent.getHumanResource());
  }

  cancel() {
  }

}
