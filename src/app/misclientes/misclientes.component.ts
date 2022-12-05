import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {


  public cliente:Cliente = new Cliente();
  public clientes:Cliente[]=[];

  constructor(){}
   

  ngOnInit(): void {
  }
addCliente() {
  this.clientes.push(this.cliente);
  this.cliente=new Cliente();;
}

}
