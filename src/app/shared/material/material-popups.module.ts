import { MatBottomSheetModule, MatDialogModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  exports: [
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
})
export class MaterialPopupsModule {}
