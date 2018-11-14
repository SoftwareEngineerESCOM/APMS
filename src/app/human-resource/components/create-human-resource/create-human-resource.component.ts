import {Component, OnInit, ViewChild} from '@angular/core';
import {labels} from './create-human-resource.strings';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {HumanResourceFormComponent} from '../human-resource-form/human-resource-form.component';
import {RestService} from '../../../shared/services/rest.service';
import {HumanResource} from '../../classes/human-resource';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../../shared/modules/material/confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create-human-resource.component.html',
  styleUrls: ['./create-human-resource.component.scss']
})
export class CreateHumanResourceComponent implements OnInit {

  labels: FormContainerLabels = labels;
  @ViewChild(HumanResourceFormComponent) humanResourceFormComponent: HumanResourceFormComponent;

  constructor(private rest: RestService, private matDialog: MatDialog, private snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
    this.humanResourceFormComponent.initHumanResourceForm(new HumanResource());
  }

  submit() {
    this.rest.request('post', 'HumanResource', this.humanResourceFormComponent.getHumanResource())
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
