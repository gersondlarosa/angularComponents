import { Injectable } from '@angular/core';
//import {CLIENTES} from './clientes.json';
import { Cliente} from './cliente';
import { of, Observable } from 'rxjs';
//Este importa HttpClient
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable()
export class ClienteService {

public urlEndPoint:string = 'http://localhost:8080/api/clientes';
  //En el constructor inyectamos las dependencias  con HttpClient

  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable <Cliente[]>{
  //  return of(CLIENTES);

  //Se hace cast del tipo cliente <Cliente[]>
  return this.http.get<Cliente[]>(this.urlEndPoint);

//otra forma de llamar al arreglo de clientes
//return this.http.get(this.urlEndPoint).pipe(
  //map (response => response as Cliente[])
//);
  }

  /*Para crear se crea metodo create y va a traer un cliente de tipo cliente*/
  create(cliente: Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }


  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

}
