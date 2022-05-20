import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcessoService {

  readonly APIUrl = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  consultaEscolaridade(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/Escolaridade');
  }

  insereEscolaridade(val : any){
    return this.http.post(this.APIUrl + '/Escolaridade', val);
  }

  alteraEscolaridade(val : any){
    return this.http.put(this.APIUrl + '/Escolaridade', val);
  }

  deletaEscolaridade(val : any){
    return this.http.delete(this.APIUrl + '/Escolaridade/' + val);
  }

  consultaEspecialidade(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/Especialidade');
  }

  insereEspecialidade(val : any){
    return this.http.post(this.APIUrl + '/Especialidade', val);
  }

  alteraEspecialidade(val : any){
    return this.http.put(this.APIUrl + '/Especialidade', val);
  }

  deletaEspecialidade(val : any){
    return this.http.delete(this.APIUrl + '/Especialidade/' + val);
  }

}
