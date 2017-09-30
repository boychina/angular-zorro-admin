import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';

@Component({
    selector: 'alarm-num',
    template: `
        <div class="alarm_num_container">
            <span class="critical_num">
                {{alarmNumParm.criticalNum}}
                <i *ngIf="alarmNumParm.warningAlarmTrend > 0" class="anticon anticon-arrow-up"></i>
                <i *ngIf="alarmNumParm.warningAlarmTrend === 0" class="anticon anticon-minus"></i>
                <i *ngIf="alarmNumParm.warningAlarmTrend < 0" class="anticon anticon-arrow-down"></i>
            </span>
            <span class="warning_num">
                {{alarmNumParm.warningNum}}
                <i *ngIf="alarmNumParm.criticalAlarmTrend > 0" class="anticon anticon-arrow-up"></i>
                <i *ngIf="alarmNumParm.criticalAlarmTrend === 0" class="anticon anticon-minus"></i>
                <i *ngIf="alarmNumParm.criticalAlarmTrend < 0" class="anticon anticon-arrow-down"></i>
            </span>
        </div>
    `,
    styles: [`
        .alarm_num_container{
            display: inline-block;
            height: 100%;
            outline: 1px solid red;
            float: right;
        }
        .critical_num{
            color: #fb523e;
        }
        .critical_num:before{
            content: '';
            width: 8px;
            height: 8px;
            display: inline-block;
            background-color: #fb523e;
        }
        .warning_num{
            color: #ffa233;
        }
        .warning_num:before{
            content: '';
            width: 8px;
            height: 8px;
            display: inline-block;
            background-color: #ffa233;
        }
    `]
})

export class AlarmNum {
    @Input() alarmNumParm;
    constructor(private http: Http) {

    }

    ngOnInit() {

    }

    ngOnChanges () {
        
    }
}