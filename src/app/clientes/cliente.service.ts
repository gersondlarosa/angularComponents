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


  /*Creamo nuevo metodo que sera update que resivira el obejto cliente y retornaremos un Obserbable de tipo clientes
  pasaremostres parametros el urlEndPoint cliente.id , cliente y las cabezeras depues iremos al form.components*/

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  /*En cliente services vamosa crear un metodo que se llame delete que contendra un id de tipo number y va a traer un obserbable de cleitne
  y retornara un http de tipo delete y concatenaremos con cliente y traera el urlEndPoint y el id tambien traera las cabezeras headers y httpHeaders
  despues iremos a nuestro cliente components*/

  delete(id: number): Observable<Cliente>{
  return  this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers:  this.httpHeaders  })
  }

}
