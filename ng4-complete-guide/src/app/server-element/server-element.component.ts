import { Component, OnInit,OnChanges, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent  {

  message: string = "hola mondo ViewChild";
  @Output() message1 = new EventEmitter<string>();
  anuj: string = "hello Anuj";
  anujg: string = "hello Anujg     ";

  @Input('anuj') element: {
    type: string,
    name: string,
    content: string
  };

  @Input() name: string;
  constructor() {
    console.log("Constructor Call");
  }


  onAddBlueprint() {
    this.anujg = "changed value viewchild";
    this.message1.emit(this.anuj);

  }

}
