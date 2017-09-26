import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';

import { geoCoordMap } from '../../utils/geoCoordMap';

@Component({
    selector: 'indexPage',
    templateUrl: './indexpage.component.html',
    styleUrls: ['./indexpage.component.scss'],
    animations: [routerTransition()]
})

export class IndexPageComponent implements OnInit {
    showloading: boolean = true;
    constructor(public router: Router, private http: Http) {
        setTimeout(() => {
            this.showloading = false;
        }, 3000);
    }

    ngOnInit () {
        console.log("geoCoordMap", geoCoordMap);
    }

    topLineOption = {
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
                data:[
                    1506316500,
                    1506317400,
                    1506318300,
                    1506319200,
                    1506320100,
                    1506321000,
                    1506321900,
                    1506322800,
                    1506323700,
                    1506324600,
                    1506325500,
                    1506326400,
                    1506327300,
                    1506328200,
                    1506329100,
                    1506330000,
                    1506330900,
                    1506331800,
                    1506332700,
                    1506333600,
                    1506334500,
                    1506335400,
                    1506336300,
                    1506337200,
                    1506338100,
                    1506339000,
                    1506339900,
                    1506340800,
                    1506341700,
                    1506342600,
                    1506343500,
                    1506344400,
                    1506345300,
                    1506346200,
                    1506347100,
                    1506348000,
                    1506348900,
                    1506349800,
                    1506350700,
                    1506351600,
                    1506352500,
                    1506353400,
                    1506354300,
                    1506355200,
                    1506356100,
                    1506357000,
                    1506357900,
                    1506358800,
                    1506359700,
                    1506360600,
                    1506361500,
                    1506362400,
                    1506363300,
                    1506364200,
                    1506365100,
                    1506366000,
                    1506366900,
                    1506367800,
                    1506368700,
                    1506369600,
                    1506370500,
                    1506371400,
                    1506372300,
                    1506373200,
                    1506374100,
                    1506375000,
                    1506375900,
                    1506376800,
                    1506377700,
                    1506378600,
                    1506379500,
                    1506380400,
                    1506381300,
                    1506382200,
                    1506383100,
                    1506384000,
                    1506384900,
                    1506385800,
                    1506386700,
                    1506387600,
                    1506388500,
                    1506389400,
                    1506390300,
                    1506391200,
                    1506392100,
                    1506393000,
                    1506393900,
                    1506394800,
                    1506395700,
                    1506396600,
                    1506397500,
                    1506398400,
                    1506399300,
                    1506400200,
                    1506401100,
                    1506402000
                ]
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
                data:[
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "25.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "125.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "25.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "125.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "25.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "125.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "25.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "125.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "25.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "125.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "25.32",
                    "95.02",
                    "95.12",
                    "96.12",
                    "97.12",
                    "95.22",
                    "95.42",
                    "95.92",
                    "125.32",
                    "95.02"
                ]
            }
        ]
    }

    datamapvalue = [
        {name: '海门', value: [121.15,31.89,9]},
        {name: '鄂尔多斯', value: [109.781327,39.608266,12]},
        {name: '招远', value: [120.38,37.35,12]},
        {name: '舟山', value: [122.207216,29.985295,12]},
        {name: '齐齐哈尔', value: [123.97,47.33,14]},
        {name: '盐城', value: [120.13,33.38,15]},
        {name: '赤峰', value: [118.87,42.28,16]},
        {name: '青岛', value: [120.33,36.07,18]},
        {name: '乳山', value: [121.52,36.89,18]},
        {name: '金昌', value: [102.188043,38.520089,19]}
    ];

    mapOption = {
        backgroundColor: '#fff',
        title: {
            text: '全国主要城市空气质量',
            subtext: 'data from PM25.in',
            sublink: 'http://www.pm25.in',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: this.datamapvalue,
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        showl: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'ddb926'
                    }
                }
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: this.datamapvalue,
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    }



}