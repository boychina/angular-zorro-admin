import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';


@Component({
    selector: 'top-line',
    templateUrl: './topLine.component.html',
    styleUrls: ['./topLine.component.scss']
})

export class TopLineComponent implements OnInit {
    topLineOption: any = {};

    @Input() xAxisData;
    @Input() seriesData;

    constructor() {
        
    }
    
    ngOnInit () {

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