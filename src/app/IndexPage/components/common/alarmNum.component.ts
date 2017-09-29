import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';

@Component({
    selector: 'alarm-num',
    template: `
        <div class="alarm_num_container">
            <span class="critical_num">
                {{criticalNum}}
                <i class="anticon anticon-arrow-up"></i>
            </span>
            <span class="warning_num">
                {{warningNum}}
                <i class="anticon anticon-arrow-up"></i>
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
    @Input() criticalNum;
    @Input() warningNum;
    constructor(private http: Http) {

    }

    ngOnInit() {

    }
}