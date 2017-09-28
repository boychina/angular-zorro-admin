import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';

import { AlarmNum } from './alarmNum.component';

import * as Apis from '../../../../utils/Apis';

@Component({
    selector: 'vip-user',
    templateUrl: './vipUser.component.html',
    styleUrls: ['./vipUser.component.scss']
})

export class VipUserComponent implements OnInit {
    newDate: string = '';
    warningInfoNum: number = 0;
    criticalInfoNum: number = 0;
    vipUserDataUrl: string = Apis.indexPageUrl.GET_VIPUSER_DATA;

    constructor(private http: Http) {

    }

    ngOnInit() {
        console.log(">>>>", this.vipUserDataUrl);
    }
    
}