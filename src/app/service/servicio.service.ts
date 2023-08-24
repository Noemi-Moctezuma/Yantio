import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  public url = 'http://192.168.1.74/yantio/service/service.php';
  public url2 ='https://fcm.googleapis.com/fcm/send';
  public headersNotificaciones ={
    headers:new HttpHeaders({
      'content-Type':'application/json',
      'Authorization':"key=AAAAQOy13yQ:APA91bGrclm6SVJwX1zn7QMr_M0f51fAEWbAcAJRtdevRK0O6b32RRLzYzcnQ6OondKL3OBzWmqVH3l_-nFeM4gOoLZUhNuyb4571KpdSO2NYRPtNgXjP3Yx-mWLuUuXwD2HsMvPpkLV"
    })

  };
  public httpOption ={
    headers:new HttpHeaders({
      'content-Type':'application/x-www-form-urlencoded'
    })
  };

  constructor(private http:HttpClient) { 
    
  }
  Post( Parametros){
    return this.http.post( this.url , Parametros, this.httpOption)
  }
  Post2( Parametros){
    return this.http.post( this.url2 , Parametros, this.headersNotificaciones)
  }
}
