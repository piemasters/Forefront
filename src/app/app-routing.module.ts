import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';

const appRoutes: Routes = [
  { path: '', loadChildren: 'src/app/modules/home/home.module#HomeModule' },
  // { path: 'page-not-found', loadChildren: 'app/pages/page-not-found/page-not-found.module#PageNotFoundModule' },
  // {
  //   path: 'error', loadChildren: 'app/pages/error-page/error-page.module#ErrorPageModule',
  //   data: { message: 'You are not authenticated to view this page!' }
  // },
  // { path: '**', redirectTo: 'page-not-found'} // Ensure this is the last path
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
