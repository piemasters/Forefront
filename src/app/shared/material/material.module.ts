import { NgModule } from '@angular/core';
import { MaterialButtonsModule } from './material-buttons.module';
import { MaterialFormsModule } from './material-forms.module';
import { MaterialLayoutModule } from './material-layout.module';
import { MaterialNavModule } from './material-nav.module';
import { MaterialPopupsModule } from './material-popups.module';
import { MaterialTablesModule } from './material-tables.module';

@NgModule({
  imports: [
    MaterialButtonsModule,
    MaterialFormsModule,
    MaterialLayoutModule,
    MaterialNavModule,
    MaterialPopupsModule,
    MaterialTablesModule
  ],
  exports: [
    MaterialButtonsModule,
    MaterialFormsModule,
    MaterialLayoutModule,
    MaterialNavModule,
    MaterialPopupsModule,
    MaterialTablesModule
  ],
})
export class MaterialModule {}
