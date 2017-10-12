// i created this whole folder by typing ng g c servers.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server was created! :(';
  serverName = 'testServer';
  username = 'testUsername';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
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
}
