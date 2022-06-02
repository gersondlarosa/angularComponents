# ClientesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Clientes component.html

Ya que se creo el cliente component lo que haremos es de la pagina de bootstrap y buscamos un car yo lo tengo a si


![html](https://user-images.githubusercontent.com/68626555/170749794-5d26446e-1446-4c95-9bd6-6aac92cd50f2.png)


para poder listar  lo que tenemos en el json en el html vamos a poner un *ngFor="let cliente of clientes" 


![2](https://user-images.githubusercontent.com/68626555/170758986-1691e8bb-ea3e-4dce-a520-6dbde2ac4390.png)


*ngFor="let cliente of clientes" aqui le estamos pidiendo un cliente de el clientes que se enceuntra en clientes.componente

Tambien crearemos un clientes json y se vera de la sigueitne forma importaremos clientes.ts

import { Cliente } from './cliente';

export const CLIENTES: Cliente[] = [
   {id: 1, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 2, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 3, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 4, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 5, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 6, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 7, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 8, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 9, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 10, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
   {id: 11, nombre: 'Joel Gerson', apellido: 'Flores', email: 'gerson.dlarosa@gmail.com', createAt:'2022/04/04'},
];


![4](https://user-images.githubusercontent.com/68626555/170760847-b0cddd4c-93d2-4893-8ae7-ad670b988aef.png)

Vamos a crear un un Service con el sigueitne comando dentro de la carpeta clientes ng generate service cliente importaremos los siguentes archivos 

import {CLIENTES} from './clientes.json';
import { Cliente} from './cliente';
import { of, Observable } from 'rxjs';

ya en el ClientesService tendremos lo siguente un get de clientes recodemos que get es solo para mostrar aqui consumiremos un obserbalbe de CLIENTES que es el json

getClientes(): Observable <Cliente[]>{
return of(CLIENTES)}

Para agregar el touter agregaremos el siguienteimport {RouterModule, Routes} from '@angular/router';

crearemos una constante con nuestros componentes y ahi apuntaran

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
]

en declration agregaremos todos nuestros componentes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  
  en impor agregaremos el  si es que no lotienes
  RouterModule.forRoot(routes)
  
  y en provider todos los services que ocuparemos 
  
  
  
    providers: [ClienteService],
    
    
    Quedara a si
    
    ![7](https://user-images.githubusercontent.com/68626555/170763583-82eb5502-eea1-49ef-881a-2792b49ceccf.png)

y tus ligas de header podremos el router link routerLink="/directivas" depeindiendo de donde quieras apuntar
    

![8](https://user-images.githubusercontent.com/68626555/170764099-c4339788-7632-4afc-9f1f-013f789ce9f8.png)


## Como conectar al back nuestro front

Ingresaremos en nuestro app.modules.ts he importaemos 

import {HttpClientModule} from '@angular/common/http';

Despues en imports agregaremos el  HttpClientModule y quedara de la siguiente forma


![ancgula + back](https://user-images.githubusercontent.com/68626555/171520557-1cc98fc4-809a-4200-84b1-58a2184b3759.png)


Luego ingresaremos a cliente.service.ts he importalemos HttpClient y map

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

en el contructor crearemos una variable en la cual llamremosnuestra url del back y sera del tipo string yo la nombre urlEndPoint esto dentro de nuestra class Cliente Service


public urlEndPoint:string = 'http://localhost:8080/api/clientes';

y en el constructor llamaremos y el objeto lo mandaremos llamr via constructor 

constructor(private http: HttpClient) { }

y la forma mas simple de listar nuestro elemento es mediante un get de clientes y retornaremos un obserbable de clientes <Cliente[]> y hacemos el cast del tipo cliente 

  getClientes(): Observable <Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint);
    
      //Se hace cast del tipo cliente <Cliente[]>
  return this.http.get<Cliente[]>(this.urlEndPoint);
  
  
  //otra forma de llamar al arreglo de clientes esta forma es si queremos ocupar el map con una promesa de tipo cleinte 
//return this.http.get(this.urlEndPoint).pipe(
  //map (response => response as Cliente[])
//);
  
  }


![httpclient](https://user-images.githubusercontent.com/68626555/171521086-599e156a-cda5-4bc8-81f6-56cfb0f4c443.png)

corremos nuestro front con 

//ng serve -o 

y si todo sale bien no arrojara una lista de clientes 

![web](https://user-images.githubusercontent.com/68626555/171521951-94fae96e-d214-4e34-92c2-1e4759bc026a.png)
