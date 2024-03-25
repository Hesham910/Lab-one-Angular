import { Component } from '@angular/core';
import { Store } from '../../models/store';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  myStore:Store;
  clientName: string;

 
    constructor(){
      this.myStore = new Store("My Store", ["minia","assuit"],"https://fakeimg.pl/250x100/");
      this.clientName = "Hesham Hassan";

}}

