import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {}

  public loginUserFromRemote(mobile: any,motDePasse ):Observable<any>{
    return this._http.get("http://localhost:8088/masante/api/test/connexion/"+mobile+"/"+motDePasse)

  }

  public registerUserFromRemote(compte:any){
    return this._http.post("http://localhost:8088/masante/api/test/creer", compte);

  }
  





  // login2(mobile :String,motDePasse : String){
  //   return this.http.get(this.apiUrl+"/connexion/"+mobile+"&"+motDePasse);
  // }

  // login3(mobile :String,motDePasse : String){
  //   return this.http.get(this.apiUrl+"/medecin/"+mobile+"&"+motDePasse);
  // }
  
}
