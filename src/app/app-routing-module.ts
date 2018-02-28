import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'players', loadChildren: './players/players.module#PlayersModule'}
    
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
      ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}