import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../service/servicio.service';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private service:ServicioService, public navCtrl: NavController, public alertController: AlertController) { }

  ngOnInit() {
  }
  alertError() {

    this.alertController.create({
      header: '¡Error!',
      message: 'Revisa las credenciales',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  };
  alertOk() {

    this.alertController.create({
      header: '¡Listo!',
      message: 'Inicio correcto',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  };

  info = {
    opcion:'login',
    usuario:'',
    contrasena:''

  }

  login(){
    console.log(this.info);
    this.service.Post(this.info).subscribe((data:any)=>{
      console.log(data);
    
      if(data == false){
       this.alertError();
       
      }
      else{
        this.alertOk();
        console.log(data.id);
        localStorage.setItem("id", data.id);
        this.navCtrl.navigateForward('tabs/reportar');
      }
    })
  }

}

