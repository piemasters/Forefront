import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';


@NgModule({
  imports: [
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule
  ],
  exports: [
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule
  ],
})
export class MaterialCdkComponentsModule {}
