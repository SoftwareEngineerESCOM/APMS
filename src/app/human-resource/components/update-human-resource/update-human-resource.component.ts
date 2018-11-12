import {Component, OnInit, ViewChild} from '@angular/core';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {labels} from './update-human-resource.strings';
import {HumanResourceFormComponent} from '../human-resource-form/human-resource-form.component';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../../../shared/services/rest.service';
import {RESTResponse} from '../../../shared/classes/rest-response';
import {HumanResource} from '../../classes/human-resource';

@Component({
  selector: 'app-update-human-resource',
  templateUrl: './update-human-resource.component.html',
  styleUrls: ['./update-human-resource.component.scss']
})
export class UpdateHumanResourceComponent implements OnInit {

  @ViewChild(HumanResourceFormComponent) humanResourceFormComponent: HumanResourceFormComponent;

  labels: FormContainerLabels = labels;
  humanResourceId: string;

  constructor(private activatedRoute: ActivatedRoute, private rest: RestService) {
    this.humanResourceId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.rest.request('get', 'HumanResource/' + this.humanResourceId, undefined)
      .subscribe((response: RESTResponse) => {
        console.log(response);
        this.humanResourceFormComponent.initHumanResourceForm(response.payload as HumanResource);
      });
    /*setTimeout(() => {
      this.humanResourceFormComponent.initHumanResourceForm(
        {
          'id': 1,
          'name': 'Sergio',
          'firstSurname': 'Sanchez',
          'secondSurname': 'Valencia',
          'title': {
            'id': 0,
            'name': 'Ingeniero',
            'abbreviation': 'Ing.',
            'description': 'Se las ingenia.'
          },
          'position': {
            'id': 0,
            'name': 'Estudiante',
            'abbreviation': 'Estd.',
            'description': 'Se las ingenia x2.'
          },
          'workplace': {
            'id': 1,
            'name': 'ESCUELA SUPERIOR DE COMPUTO',
            'abbreviation': 'ESCOM.',
            'workplaceType': {
              'id': 0,
              'name': 'UNIDAD ACADEMICA',
              'abbreviation': 'UA.',
              'description': 'SE RIFA.'
            }
          }
        }
      );
    }, 0);*/
  }

  submit() {
    this.rest.request('patch', 'HumanResource', this.humanResourceFormComponent.getHumanResource());
    console.log(this.humanResourceFormComponent.getHumanResource());
  }

  cancel() {
  }

}
