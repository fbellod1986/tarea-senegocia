import { Component } from '@angular/core';
import { SidebarService } from './views/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tarea Senegocia';
  constructor(public sidebarservice: SidebarService) { }
  
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }
}
