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
    createVipUserAlarmDataUrl: string = Apis.indexPageUrl.CREATE_VIPUSER_ALARM_DATA;
    constructor(private http: Http) {

    }

    ngOnInit() {
        /**
         * 组件出事话完成请求当前组件所需数据
         */
        let me = this;
        let body = JSON.stringify({});
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        me.http.post(me.createVipUserAlarmDataUrl, body, options).toPromise().then((res) => {
            console.log(res);
        });
        me.http.post(me.vipUserDataUrl, body, options).toPromise().then((res) => {
            console.log(res.json());
            me.warningInfoNum = res.json().warningAlarm;
            me.criticalInfoNum = res.json().criticalAlarm;
        });
    }
    
}