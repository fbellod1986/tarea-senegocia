import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../shared/sidebar/sidebar.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  constructor(public sidebarservice: SidebarService) { }

  ngOnInit() {
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

}
