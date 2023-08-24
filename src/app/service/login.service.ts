import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = 'http://localhost/yantio/service/service.php';
  public httpOption ={
    headers:new HttpHeaders({
      'content-Type':'application/x-www-form-urlencoded'
    })

  };

  constructor(private http:HttpClient) { }

  Post(Parametros){
    return this.http.post(this.url, Parametros, this.httpOption)
  }

}
