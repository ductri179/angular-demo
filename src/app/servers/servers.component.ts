import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowToAddServer = false;
  stringEmpty = true;
  serverCreationStatus = 'No server was created';
  serverName = '';
  username: String;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowToAddServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server is created successfully! Name is: " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClearTextBox() {
    this.username = "";
  }

  onUpdateUsename(event : Event) {
    if ((<HTMLInputElement>event.target).value !== "") {
      this.stringEmpty = false;
    } else {
      this.stringEmpty = true;
    }
  }

}
