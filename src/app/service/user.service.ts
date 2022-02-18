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

  url='http://localhost:8088/masante/api/test';
  
  public loginUserFromRemote(mobile: any,motDePasse ):Observable<any>{
    return this._http.get("http://localhost:8088/masante/api/test/connexion/"+mobile+"&"+motDePasse)

  }


  public registerUserFromRemote(compte:any){
    return this._http.post("http://localhost:8088/masante/api/test/creer", compte, {responseType: "text"})
  }


  Register(medecin: any){
    return this._http.post("localhost:8088/masante/api/test/add/medecin", medecin)
  }
  
//--------------creation de compte-------------

creerCompte(data:any):Observable<any>{
  console.log(data);
  return this._http.post(this.url+"/creer",data, {responseType: "text"});
}

//------------------Algo--------------------------

calculDonnee(data:any):Observable<any>{
  console.log(data);
  return this._http.post(this.url+"/calculDonnee",data);
}

//-------------Calcul Tension-----------------------

calculTension(data:any):Observable<any>{
  console.log(data);
  return this._http.post(this.url+"/calculTension",data, {responseType: "text"});
}

//-------------Calcul Diabete-----------------------

calculDiabete(data:any):Observable<any>{
  console.log(data);
  return this._http.post(this.url+"/calculDiabete",data, {responseType: "text"});
}
//--------------////////---------------------

  // login2(mobile :String,motDePasse : String){
  //   return this.http.get(this.apiUrl+"/connexion/"+mobile+"&"+motDePasse);
  // }

  // login3(mobile :String,motDePasse : String){
  //   return this.http.get(this.apiUrl+"/medecin/"+mobile+"&"+motDePasse);
  // }
  
}
