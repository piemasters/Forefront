import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './core/auth/store/auth.effects';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ AuthEffects ]),
    StoreRouterConnectingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
