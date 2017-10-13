import { Component } from '@angular/core';

/*
selector: the tag name that you want to identify this component with
in the index.html file
*/
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`

    .online {
    color: white;
    }

    `]
})

// decorator : enhance your component "class"
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }


  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';

  }
}
