import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css']
})
export class HeaderComponent {
  
  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) {
      
}


onSaveData() {
this.dataStorageService.storePlayers()
.subscribe(
(response: Response) => {
console.log(response);
}
);
}

onFetchData() {
this.dataStorageService.getPlayers();
}

onLogout() {
this.authService.logout();
}
isAuthenticated(){
  return this.authService.isAuthenticated();
}
}
