import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ServerElementComponent } from './server-element/server-element.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  serverElements = [{type:'server', name: 'TestServer', content: 'Just a Test!'}];
  message: string = "hello World"
  messageInput: string = "hello "

  anujgarg:string = "hello";
  @ViewChild(ServerElementComponent) child;


  waisehe(e){
    this.anujgarg = e;
  }




  ngAfterViewInit(){
    this.message = this.child.message;
  }
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blurprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blurprintData.serverName,
      content: blurprintData.serverContent
    });

  }

}
