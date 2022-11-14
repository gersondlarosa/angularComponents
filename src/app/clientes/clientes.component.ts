import { Component, OnInit } from '@angular/core';
import { Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

clientes: Cliente[];


  constructor(public clienteService: ClienteService) {}

  ngOnInit(){
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

/*Crearemos el metodo cliente que traera al cliente de tipo cliente y no regresara nada
 ese delte sera la accion que se tomara en el evento click traeremos de la pagina https://sweetalert2.github.io/ un
 teplate para eliminar nodificaemos title, texto y con las llaves de interpoalcion taeremos al nombre y apellido */
  delete(cliente: Cliente): void{
swal.fire({
  title: 'Estas seguro?',
  text: `Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}`,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Si, eliminar!',
  cancelButtonText: 'No, cancelar!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    this.clienteService.delete(cliente.id).subscribe(
      response => {
        this.clientes = this.clientes.filter(cli => cli !== cliente)
        swal.fire(
          'Cliente Eliminado!',
          `Cliente ${cliente.nombre}  eliminado con exito.`,
          'success'
        )
      }
    )


  }
})
  }

}
