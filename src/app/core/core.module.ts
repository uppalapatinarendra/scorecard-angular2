import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { HeaderComponent } from './header/header-component';
import { AppRoutingModule } from '../app-routing-module';
import { PlayerService } from '../players/player.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    PlayerService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}
