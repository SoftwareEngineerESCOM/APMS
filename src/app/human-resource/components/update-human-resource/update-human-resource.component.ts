import {Component, OnInit, ViewChild} from '@angular/core';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {labels} from './update-human-resource.strings';
import {HumanResourceFormComponent} from '../human-resource-form/human-resource-form.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../../../shared/services/rest.service';
import {RESTResponse} from '../../../shared/classes/rest-response';
import {HumanResource} from '../../classes/human-resource';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../../shared/modules/material/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-update-human-resource',
  templateUrl: './update-human-resource.component.html',
  styleUrls: ['./update-human-resource.component.scss']
})
export class UpdateHumanResourceComponent implements OnInit {

  @ViewChild(HumanResourceFormComponent) humanResourceFormComponent: HumanResourceFormComponent;

  labels: FormContainerLabels = labels;
  humanResourceId: string;

  constructor(private activatedRoute: ActivatedRoute, private rest: RestService, private snackBar: MatSnackBar,
              private router: Router, private matDialog: MatDialog) {
    this.humanResourceId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.rest.request('get', 'HumanResource/' + this.humanResourceId, undefined)
      .subscribe((response: RESTResponse) => {
        console.log(response);
        this.humanResourceFormComponent.initHumanResourceForm(response.payload as HumanResource);
      });
  }

  submit() {
    this.rest.request('patch', 'HumanResource', this.humanResourceFormComponent.getHumanResource())
      .subscribe(response => {
        console.log(response);
        this.snackBar.open('Registro Finalizado Exitosamente', 'Omitir', {
          duration: 2000
        });
        this.router.navigate(['/recursoshumanos/consultar/']);
      });
    console.log(this.humanResourceFormComponent.getHumanResource());
  }

  cancel() {
    this.matDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmación',
        content: '¿Seguro que desea cancelar el registro?',
        ok: 'Si',
        cancel: 'No'
      }
    }).afterClosed().subscribe(result => {
      if (result === 'ok') {
        this.router.navigate(['/recursoshumanos/consultar/']);
      }
    });
  }

}
