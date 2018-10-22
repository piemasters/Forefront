import { NgModule } from '@angular/core';
import { MaterialButtonsModule } from './material-buttons.module';
import { MaterialFormsModule } from './material-forms.module';
import { MaterialLayoutModule } from './material-layout.module';
import { MaterialNavModule } from './material-nav.module';
import { MaterialPopupsModule } from './material-popups.module';
import { MaterialTablesModule } from './material-tables.module';
import { MaterialCdkComponentsModule } from './material-cdk-components.module';
import { MaterialCdkBehaviorsModule } from './material-cdk-behaviors.module';

@NgModule({
  imports: [
    MaterialButtonsModule,
    MaterialFormsModule,
    MaterialLayoutModule,
    MaterialNavModule,
    MaterialPopupsModule,
    MaterialTablesModule,
    MaterialCdkComponentsModule,
    MaterialCdkBehaviorsModule
  ],
  exports: [
    MaterialButtonsModule,
    MaterialFormsModule,
    MaterialLayoutModule,
    MaterialNavModule,
    MaterialPopupsModule,
    MaterialTablesModule,
    MaterialCdkComponentsModule,
    MaterialCdkBehaviorsModule
  ],
})
export class MaterialModule {}
