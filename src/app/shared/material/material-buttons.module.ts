import { MatButtonModule, MatButtonToggleModule, MatBadgeModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
  MatProgressBarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
})
export class MaterialButtonsModule {}
