import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class HomeModule { }
