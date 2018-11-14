import {Component, OnInit, ViewChild} from '@angular/core';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {labels} from './create-academic-program.strings';
import {RestService} from '../../../shared/services/rest.service';
import {AcademicProgramFormComponent} from '../academic-program-form/academic-program-form.component';
import {AcademicProgram} from '../../classes/academic-program';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../../shared/modules/material/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-create-academic-program',
  templateUrl: './create-academic-program.component.html',
  styleUrls: ['./create-academic-program.component.scss']
})
export class CreateAcademicProgramComponent implements OnInit {

  labels: FormContainerLabels = labels;
  @ViewChild(AcademicProgramFormComponent) academicProgramFormComponent: AcademicProgramFormComponent;

  constructor(private rest: RestService, private router: Router, private snackBar: MatSnackBar,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.academicProgramFormComponent.initAcademicProgramForm(new AcademicProgram());
  }

  submit() {
    this.rest.request('post', 'AcademicProgram', this.academicProgramFormComponent.getAcademicProgram())
      .subscribe(response => {
        console.log(response);
        this.snackBar.open('Registro Finalizado Exitosamente', 'Omitir', {
          duration: 2000
        });
        this.router.navigate(['/programasacademicos/consultar/']);
      });
    console.log(this.academicProgramFormComponent.getAcademicProgram());
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
        this.router.navigate(['/programasacademicos/consultar/']);
      }
    });
  }

}
