import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/welcome/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/welcome/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'modalpopup',
    loadChildren: () => import('./pages/tabs/modalpopup/modalpopup.module').then( m => m.ModalpopupPageModule)
  },
  {
    path: 'city',
    loadChildren: () => import('./pages/tabs/city/city.module').then( m => m.CityPageModule)
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
