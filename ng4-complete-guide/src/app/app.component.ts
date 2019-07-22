import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ServerElementComponent } from './server-element/server-element.component';
import { CockpitComponent } from './cockpit/cockpit.component';


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
  @ViewChild(ServerElementComponent) child : ServerElementComponent;
  @ViewChild(CockpitComponent)  anujtesting: CockpitComponent ;


  waisehe(e){
    this.anujgarg = e;
  }




  ngAfterViewInit(){
    this.message = this.child.anujg;
    console.log(this.anujtesting.serverContentInput.nativeElement.value)
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

  onChangeFirst(){
    this.serverElements[0].name = "Changes";
  }


}
