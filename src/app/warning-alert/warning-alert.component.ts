import { Component } from '@angular/core';


@Component({
    selector:'app-warning-alert',
    // templateUrl:'./warning-alert.component.html',
    // styleUrls:['./warning-alert.component.css']
    template:`<p class="warning">this is a warning message</p>`,
    styles:[`
        .warning {
            color: red;
        }
    `]
})
export class WarningAlert {}