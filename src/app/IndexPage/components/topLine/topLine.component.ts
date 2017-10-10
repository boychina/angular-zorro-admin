import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';
import * as Apis from '../../../../utils/Apis';

import { dateFormat } from '../../../../utils/dateFormat';

@Component({
    selector: 'top-line',
    templateUrl: './topLine.component.html',
    styleUrls: ['./topLine.component.scss']
})

export class TopLineComponent implements OnInit {
    topLineOption: any = {};
    topLineDataUrl: string = Apis.indexPageUrl.GET_TOPLINE_DATA;

    xAxisData: string[] = [];
    seriesData: string[] = [];

    constructor(private http: Http) {
        
    }
    
    ngOnInit () {
        let me = this;
        let body = JSON.stringify({
            "alarmTime": ''
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        me.http.post(me.topLineDataUrl, body, options).toPromise().then((res) => {
            me.xAxisData = me.dateFormatFun(res.json().xAxis);
            me.seriesData = res.json().amounts;
            me.setOption(me.xAxisData, me.seriesData);
        })
    }

    dateFormatFun(arr){
        let arrays = [];
        arr.map((val) => {
            arrays.push(dateFormat(val*1000, 'hh:ii'));
        })
        return arrays;
    }

    ngOnChanges () {
        let me = this;
        me.setOption(me.xAxisData, me.seriesData);
    }

    setOption(xAxisData, seriesData) {
        let me = this;
        me.topLineOption = {
            tooltip : {
                trigger: 'axis',
                // alwaysShowContent: false,
                axisPointer : {
                    type : 'shadow',
                    shadowStyle:{
                        color:'rgba(0, 160, 233, 0.4)'
                    }
                },
                formatter:function(params){
                    if(Array.isArray(params)==true){
                        return "Time:"+params[0].name+"<br>"+"Alarm Number:"+params[0].value
                    }
                }
            },
            grid: {
                left: 0,
                right: 40,
                bottom: 0,
                top: 50,
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    nameTextStyle:{
                        color:'#666',
                        fontFamily:'Arial',
                        fontSize:'0.12rem'
                    },
                    axisLine:{show:false},
                    axisTick:{show:false},
                    axisLabel:{
                        show:true,
                        textStyle:{
                            color: "#222"
                        }
                    },
                    boundaryGap : false,
                    data:xAxisData
                }
            ],
            yAxis : [
                {

                    type : 'value',
                    axisLine:{show:false},
                    axisTick:{show:false},
                    splitNumber:3,
                    splitLine:{
                        lineStyle:{
                            type:'dotted'
                        }
                    },
                    axisLabel:{
                        textStyle:{
                            color: "#222"
                        }
                    }
                }
            ],
            series : [
                {
                    name:'',
                    showSymbol:false,
                    type:'line',
                    smooth:true,
                    itemStyle:{
                        normal:{
                            borderColor:'#00a0e9'
                        }
                    },
                    lineStyle:{
                            normal: {
                            color:'#00a0e9' 
                        }
                    },
                    areaStyle: {
                        normal: {
                            color:'rgba(0,160,233,.2)'
                        }
                    },
                    data:seriesData
                }
            ]
        }
    }


    
}