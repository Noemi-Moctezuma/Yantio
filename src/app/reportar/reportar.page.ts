import { Component } from '@angular/core';
//import { FCM } from '@ionic-native/fcm/ngx';
import { ServicioService } from '../service/servicio.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-reportar',
  templateUrl: 'reportar.page.html',
  styleUrls: ['reportar.page.scss']
})
export class reportarPage {
  constructor(private service:ServicioService, public alertController: AlertController) {
    this.llenarTipo();
  }
  alertError() {
    this.alertController.create({
      header: '¡Error!',
      message: 'Error al crear el reporte',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });

  };
  alertOk() {
    this.alertController.create({
      header: '¡Listo!',
      message: 'Reporte creado con éxito',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  };
  tipo : any[];
  llenarTipo(){
  this.service.Post({
    opcion:"tiposReportes"}
    ).subscribe((data:any)=>{
      this.tipo=data;   
  })
  }
  todo = {
    opcion:'reportar',
    descripcion:'',
    ubicacion:'',
    idUsuario:parseInt(localStorage.getItem("id")),
    idTipo:''
  }
  primerTipo(){
    return this.todo.idTipo;
    }
  reportar() {
    console.log(this.todo);
    this.service.Post(this.todo).subscribe((data:any)=>{
      if(data == true){
        //alert("El reporte se creo con éxito");
        this.alertOk();
        this.service.Post2({
          "notification":{
            "title":"¡Nuevo reporte!",
            "body":"Se ha actualizado el historial de reportes"
          },
          "to":"APA91bHdXA_WxqHSCLAbXlOWy5fWKNt8OquWdmYtlV1o4G01kn2jBOzBsoJiLcEy7U7T563OlH24tg-OWzNMLjGAjKj4PHZ0pIuEaGl14Z1gNxhUaWnkkhVFEB1LdTIvtOJrGIIFAI5Q"
        }).subscribe((data:any)=>{
          console.log(data);
          this.limpiar();
        })
      }
      else{
        //alert("Error"/*, "Error al crear reporte", "error"*/);
        this.alertError();
      }
    })
    }
    limpiar(){
      this.todo = {
        opcion:'reportar',
        descripcion:'',
        ubicacion:'',
        idUsuario:parseInt(localStorage.getItem("id")),
        idTipo:''
    
      }
    }
    


}
