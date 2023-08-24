import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ServicioService } from '../service/servicio.service';

@Component({
  selector: 'app-llamar',
  templateUrl: 'llamar.page.html',
  styleUrls: ['llamar.page.scss']
})
export class llamarPage {

  constructor(private service:ServicioService, private callNumber: CallNumber) {
  this.miContacto();
  }
  contacto: String;
  miContacto(){
    this.service.Post({
      opcion:"miContacto", 
      idUsuario: "4"}
      ).subscribe((data:any)=>{
        this.contacto=data.mi_contacto;
        
    })
    
    }
  policia(){
    this.callNumber.callNumber("4151499185", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  
  cruzRoja(){
    this.callNumber.callNumber("4151252544", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
    
  }
  bomberos(){
    this.callNumber.callNumber("4151252544", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  
  llamarContacto(){
    this.callNumber.callNumber(this.contacto.toString(), true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
}
