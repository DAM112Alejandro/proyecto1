import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  todos:any=[];
  todoText:string = '';
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {text:'hola'},
      {text: 'pepe'}
    ];
  }
  addTodo(){
    let mitodo={text:this.todoText};
    this.todos.push(mitodo)
    this.todoText = '';
  }

}
