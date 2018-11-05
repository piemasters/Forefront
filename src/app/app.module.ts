import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { metaReducers, reducers } from './store/app.reducers';
import { AuthEffects } from './core/auth/store/auth.effects';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-material'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument()  : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    EffectsModule.forRoot([ AuthEffects ]),
    StoreRouterConnectingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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
