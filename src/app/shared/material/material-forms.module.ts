import { MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
})
export class MaterialFormsModule {}
