import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
   @Output('srCreated') serverCreated = new EventEmitter< {serverName: string, serverContent: string }>();
   @Output('bpCreated') blueprintCreated = new EventEmitter< {serverName: string, serverContent: string }>();
    
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameINput) {
    console.log(this.serverContentInput)
   this.serverCreated.emit({
     serverName: nameINput.value,
     serverContent: this.serverContentInput.nativeElement.value
   })
  }

  onAddBlueprint(contentInput) {
    this.blueprintCreated.emit({
      serverName: contentInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })

  }
}
