import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';

import { AlarmNum } from './alarmNum.component';

@Component({
    selector: 'vip-user',
    templateUrl: './vipUser.component.html',
    styleUrls: ['./vipUser.component.scss']
})

export class VipUserComponent implements OnInit {
    newDate: string = '';
    warningInfoNum: number = 0;
    criticalInfoNum: number = 0;
    constructor(private http: Http) {

    }

    ngOnInit() {
        
    }
    
}