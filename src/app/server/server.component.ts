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
    serverId: number = 10;
    serverStatus: string = 'offline';
    getServerStatus() {
        return this.serverStatus;
    }
}