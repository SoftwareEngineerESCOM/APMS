import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';

@NgModule({
  exports: [
    CommonModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatTableModule,
    NgxMatSelectSearchModule,
    MatSortModule,
    MatDialogModule,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatTableModule,
    NgxMatSelectSearchModule,
    MatSortModule,
    MatDialogModule
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class MaterialModule {
}
