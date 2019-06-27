import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  message: string = "hola mondo ViewChild";
  @Output() message1 = new EventEmitter<string>();
  anuj: string = "hello Anuj";

  @Input('anuj') element: {
    type: string,
    name: string,
    content: string
  };
  constructor() {
  }

  onAddBlueprint() {
    this.message1.emit(this.anuj);

  }

  ngOnInit() {
  }

}
