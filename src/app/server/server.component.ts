import { Component } from '@angular/core';

/*
selector: the tag name that you want to identify this component with
in the index.html file
*/
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

// decorator : enhance your component "class"
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    getServerStatus() {
        return this.serverStatus;
    }
}
