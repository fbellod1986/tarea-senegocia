import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api/api.service';
import { IFormularioInfo } from '../../shared/interfaces/formulario';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectors: any = [];
  valores_tabla: any =[];
  formularioInformation: IFormularioInfo;
  msg: string = null;
  class: string = null;

  constructor(private api: ApiService, public sidebarservice: SidebarService) {

    this.formularioInformation = {
      country_id : 0,
      razonSocial : '',
      nombre : '',
    };

   }

  ngOnInit() {

    this.api.get('pais/All')
    .subscribe( (data: any) => {
      this.selectors = data;
    });

  }

  onSubmit() {
    this.api.get(`proveedor/Search?data={"pais_id":${this.formularioInformation.country_id}, "razon_social":'${this.formularioInformation.razonSocial}', "nombre_fantasia":'${this.formularioInformation.nombre}'}`).subscribe( (data:any) => {
      
      if (data.length === 0) {
        this.msg = 'No hay datos que desplegar';
        this.class = 'alert alert-danger';
      } else if (data.length !== 0) {
        this.valores_tabla = data;
        this.msg = 'Existen ' + data.length + ' Registros';
        this.class = 'alert alert-success';
      }
      },error => {
          console.log('Error');
     });

    
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }

}
