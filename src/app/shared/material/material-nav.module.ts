import { MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
  ],
})
export class MaterialNavModule {}
