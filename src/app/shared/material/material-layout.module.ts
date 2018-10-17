import { MatCardModule,  MatDividerModule, MatExpansionModule, MatGridListModule, MatListModule, MatStepperModule, MatTabsModule,
  MatTreeModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule
  ],
})
export class MaterialLayoutModule {}
