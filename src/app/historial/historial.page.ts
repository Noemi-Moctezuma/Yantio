import { Component } from '@angular/core';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-historial',
  templateUrl: 'historial.page.html',
  styleUrls: ['historial.page.scss']
})
export class HistorialPage {

  constructor(private service:ServicioService) {

    this.getReportes();
  
  }

  reportes : any[];

  getReportes(){
    this.service.Post({
      opcion:"historial"}).subscribe((data:any)=>{
        this.reportes = data;
        console.log(this.reportes);
    })
  }

}

