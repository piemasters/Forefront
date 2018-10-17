import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
})
export class MaterialTablesModule {}
