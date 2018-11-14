import {Component, OnInit, ViewChild} from '@angular/core';
import {FormContainerLabels} from '../../../shared/classes/form-container-labels';
import {labels} from './update-academic-program.strings';
import {AcademicProgramFormComponent} from '../academic-program-form/academic-program-form.component';
import {RestService} from '../../../shared/services/rest.service';
import {AcademicProgram} from '../../classes/academic-program';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmDialogComponent} from '../../../shared/modules/material/confirm-dialog/confirm-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-update-academic-program',
  templateUrl: './update-academic-program.component.html',
  styleUrls: ['./update-academic-program.component.scss']
})
export class UpdateAcademicProgramComponent implements OnInit {

  @ViewChild(AcademicProgramFormComponent) academicProgramFormComponent: AcademicProgramFormComponent;
  labels: FormContainerLabels = labels;

  academicProgramId: string;

  constructor(private rest: RestService, private activatedRoute: ActivatedRoute, private matDialog: MatDialog,
              private router: Router, private snackBar: MatSnackBar) {
    this.academicProgramId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.rest.request('get', 'AcademicProgram/' + this.academicProgramId, undefined)
      .subscribe(response => {
        console.log(response);
        this.academicProgramFormComponent.initAcademicProgramForm(response.payload as AcademicProgram);
      });
  }

  submit() {
    this.rest.request('patch', 'AcademicProgram', this.academicProgramFormComponent.getAcademicProgram())
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
