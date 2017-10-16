// i created this whole folder by typing ng g c servers.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`

      .whiteColor {
      color: white;
      }

      `]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server was created! :(';
  serverName = '';
  username = 'testUsername';
  serverCreated = false;
  servers = ['testServer1', 'testServer2'];
  clickCounter = 0;
  logArray = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! server name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // event.target.value is whats currently in the input area.
    this.serverName = event.target.value;
    // console.log(event);
  }

  onAddUsername() {
    this.username = '';
  }

  log() {
    this.clickCounter++;
    this.logArray.push(this.clickCounter);
  }

  getBackgroundColor() {
    return this.clickCounter >= 5 ? 'blue' : 'white';
  }

}
