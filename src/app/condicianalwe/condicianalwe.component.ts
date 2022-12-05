import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicianalwe',
  templateUrl: './condicianalwe.component.html',
  styleUrls: ['./condicianalwe.component.css']
})
export class CondicianalweComponent implements OnInit {


  constructor() { }
  boolean: boolean = true 
  ngOnInit(): void {
  }
  el(e: boolean) {
    this.boolean=e;
}

}
