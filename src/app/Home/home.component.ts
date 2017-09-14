import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})

export class HomeComponent implements OnInit {
    constructor (public router: Router) {

    }

    ngOnInit() {

    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

     tabs = [
        {
            name: 'Tab 1',
            index: 1
        },
        {
            name: 'Tab 2',
            index: 2
        },
        {
            name: 'Tab 3',
            index: 3
        },
        {
            name: 'Tab 4',
            index: 4
        },
        {
            name: 'Tab 5',
            index: 5
        },
        {
            name: 'Tab 6',
            index: 6
        }
    ];
    menus = [
      {
        "id": "6601",
        "isEnable": 1,
        "isShow": false,
        "menuCode": "GSGL1",
        "name": "首页",
        "parentId": "-1",
        "showType": 1,
        "sortKey": 1,
        "url": "http://10.0.8.115/indexPortal/index"
      },
      {
        "children": [
          {
            "id": "660201",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "CJQX1_",
            "name": "采集清洗监控子门户",
            "parentId": "6602",
            "showType": 1,
            "sortKey": 1,
            "url": "http://178.16.39.102:8081/ETLManager/home"
          },
          {
            "id": "660202",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "CJQX2_",
            "name": "采集清洗建模设计",
            "parentId": "6602",
            "showType": 1,
            "sortKey": 2,
            "url": "http://178.16.39.102:8081/ETLManager/designer"
          },
          {
            "id": "660203",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "CJQX3_",
            "name": "采集清洗任务管理",
            "parentId": "6602",
            "showType": 1,
            "sortKey": 3,
            "url": "http://178.16.39.102:8081/ETLManager/taskmanger/strategy"
          },
          {
            "id": "660204",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "CJQX4_",
            "name": "采集清洗节点管理",
            "parentId": "6602",
            "showType": 1,
            "sortKey": 4,
            "url": "http://178.16.39.102:8081/ETLManager/node"
          },
          {
            "id": "660205",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "CJQX5_",
            "name": "爬虫任务管理",
            "parentId": "6602",
            "showType": 1,
            "sortKey": 5,
            "url": "http://178.16.39.102:5005/use/list.html?username=dGVzdA==&password=MTIzNDU2&0"
          }
        ],
        "id": "6602",
        "isEnable": 1,
        "isShow": false,
        "menuCode": "GSGL2",
        "name": "数据采集与清洗子系统",
        "parentId": "-1",
        "showType": 0,
        "sortKey": 2
      },
      {
        "id": "6603",
        "isEnable": 1,
        "isShow": false,
        "menuCode": "GSGL4",
        "name": "市场综合监管服务数据库子系统",
        "parentId": "-1",
        "showType": 1,
        "sortKey": 3,
        "url": "http://178.16.39.115:8080/index.html?key=admin&author=YWRtaW46YWRtaW4="
      },
      {
        "children": [
          {
            "children": [
              {
                "id": "66040101",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "KBSS_",
                "name": "重点商品监管分析服务",
                "parentId": "660401",
                "showType": 1,
                "sortKey": 1,
                "url": "http://125.70.9.147:8009/analystrunner/f1b83949-2a18-4203-9f32-c762b90e6ad1"
              },
              {
                "id": "66040102",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "KESS_",
                "name": "重点企业监管服务",
                "parentId": "660401",
                "showType": 1,
                "sortKey": 2,
                "url": "http://125.70.9.147:8009/analystrunner/9acbd000-6815-4622-acb8-591d70095771"
              },
              {
                "id": "66040103",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "LC_",
                "name": "查处侵害消费者权益案件基本情况",
                "parentId": "660401",
                "showType": 1,
                "sortKey": 3,
                "url": "http://125.70.9.147:8009/analystrunner/7cd36724-db28-47c7-92d2-61501051c629"
              },
              {
                "id": "66040104",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "KESS1_",
                "name": "投诉、举报总量统计分析",
                "parentId": "660401",
                "showType": 1,
                "sortKey": 4,
                "url": "http://125.70.9.147:8009/analystrunner/81929b4f-a145-4d18-9206-a51933ded71b"
              },
              {
                "id": "66040105",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "KESS2_",
                "name": "处理商品消费投诉基本情况",
                "parentId": "660401",
                "showType": 1,
                "sortKey": 5,
                "url": "http://125.70.9.147:8009/analystrunner/46d784df-142b-43c4-8186-477e5cf14c99"
              },
              {
                "id": "66040106",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "KESS3_",
                "name": "处理服务消费投诉基本情况",
                "parentId": "660401",
                "showType": 1,
                "sortKey": 6,
                "url": "http://125.70.9.147:8009/analystrunner/2a46be3d-ca9d-4a21-996c-2191817197ef"
              },
              {
                "id": "66040107",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "KESS4_",
                "name": "处理商品消费举报基本情况",
                "parentId": "660401",
                "showType": 1,
                "sortKey": 7,
                "url": "http://125.70.9.147:8009/analystrunner/e8847c75-fa03-4b15-96b6-8b8333555e47"
              },
              {
                "id": "66040108",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "KESS5_",
                "name": "处理服务消费举报基本情况",
                "parentId": "660401",
                "showType": 1,
                "sortKey": 8,
                "url": "http://125.70.9.147:8009/analystrunner/33baca2e-304c-499d-9f27-b04707c095ee"
              },
              {
                "id": "66040109",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "KESS6_",
                "name": "投诉、举报量趋势分析",
                "parentId": "660401",
                "showType": 1,
                "sortKey": 9,
                "url": "http://125.70.9.147:8009/analystrunner/fd439fa4-89df-42c7-9976-755e07a80944"
              }
            ],
            "id": "660401",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "ACR_",
            "name": "消费维权分析",
            "parentId": "6604",
            "showType": 0,
            "sortKey": 1
          },
          {
            "children": [
              {
                "id": "66040201",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS1_",
                "name": "企业整体信用分布",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 1,
                "url": "http://125.70.9.147:8009/analystrunner/66ce2929-15a3-47d9-83f5-0a7c50c046a5"
              },
              {
                "id": "66040202",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS2_",
                "name": "公示情况分析",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 2,
                "url": "http://125.70.9.147:8009/analystrunner/5c4dcaf6-977f-4d86-b843-d4c62ca86396"
              },
              {
                "id": "66040203",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS3_",
                "name": "应公示未公示情况分析",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 3,
                "url": "http://125.70.9.147:8009/analystrunner/1dce2e0a-2c2a-4cc2-8484-fa6b2fb5d8d5"
              },
              {
                "id": "66040204",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS4_",
                "name": "处罚统计分析",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 4,
                "url": "http://125.70.9.147:8009/analystrunner/457005e1-7e61-4c5d-8f0a-9bc104a3b8aa"
              },
              {
                "id": "66040205",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS5_",
                "name": "企业公示行为分析",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 5,
                "url": "http://125.70.9.147:8009/analystrunner/b0253b8e-6f8d-4db7-9933-139baac6dae8"
              },
              {
                "id": "66040206",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS6_",
                "name": "企业公示状态查询",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 6,
                "url": "http://125.70.9.147:8009/analystrunner/19d904a7-fbcc-4ff7-ad1b-21e6e10e044d"
              },
              {
                "id": "66040207",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS7_",
                "name": "公示信息整改企业查询",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 7,
                "url": "http://125.70.9.147:8009/analystrunner/87812898-6ec7-41b8-b018-9b5b06581192"
              },
              {
                "id": "66040208",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS8_",
                "name": "企业年报查询",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 8,
                "url": "http://125.70.9.147:8009/analystrunner/2c3ec17e-8845-46f8-8c7b-f12aebd5871a"
              },
              {
                "id": "66040209",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS9_",
                "name": "企业年报异常名录公示",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 9,
                "url": "http://125.70.9.147:8009/analystrunner/f3a0e417-ca15-4abd-a192-252ad954f04e"
              },
              {
                "id": "66040210",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS10_",
                "name": "未年报企业分析",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 10,
                "url": "http://125.70.9.147:8009/analystrunner/a4f26d7d-6068-4074-a418-20bad6e88243"
              },
              {
                "id": "66040211",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS11_",
                "name": "全市企业年报情况",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 11,
                "url": "http://125.70.9.147:8009/analystrunner/6c4298b3-88d7-4017-86c9-ec0953a6efeb"
              },
              {
                "id": "66040212",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS12_",
                "name": "本年度全市企业年报分析",
                "parentId": "660402",
                "showType": 1,
                "sortKey": 12,
                "url": "http://125.70.9.147:8009/analystrunner/8e2dfd99-e4b3-43ad-9fbd-448146988be1"
              }
            ],
            "id": "660402",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS6",
            "name": "信用信息公示与监管",
            "parentId": "6604",
            "showType": 0,
            "sortKey": 2
          },
          {
            "children": [
              {
                "id": "66040301",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS23",
                "name": "整体发展情况分析",
                "parentId": "660403",
                "showType": 1,
                "sortKey": 1,
                "url": "http://125.70.9.147:8009/analystrunner/647f9325-351b-49cf-a9fa-d2c85d594860"
              },
              {
                "id": "66040302",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS24",
                "name": "存续和经营情况分析",
                "parentId": "660403",
                "showType": 1,
                "sortKey": 2,
                "url": "http://125.70.9.147:8009/analystrunner/7cee73ba-1b93-47c1-8e7e-186e058eaa61"
              },
              {
                "id": "66040303",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS25",
                "name": "吸纳就业情况分析",
                "parentId": "660403",
                "showType": 1,
                "sortKey": 3,
                "url": "http://125.70.9.147:8009/analystrunner/1a7db360-ec20-4654-a85b-387e40982f1c"
              },
              {
                "id": "66040304",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS26",
                "name": "退出分析",
                "parentId": "660403",
                "showType": 1,
                "sortKey": 4,
                "url": "http://125.70.9.147:8009/analystrunner/4e3da5b3-e7e7-4b4b-b0c7-13a8dddcb1aa"
              }
            ],
            "id": "660403",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS22",
            "name": "小微企业发展扶持分析",
            "parentId": "6604",
            "showType": 0,
            "sortKey": 3
          },
          {
            "children": [
              {
                "id": "66040401",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS27",
                "name": "整体发展情况分析",
                "parentId": "660404",
                "showType": 1,
                "sortKey": 1,
                "url": "http://125.70.9.147:8009/analystrunner/229da042-96e9-4853-b2d3-7ecf75197e4c"
              },
              {
                "id": "66040402",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS28",
                "name": "退出情况分析",
                "parentId": "660404",
                "showType": 1,
                "sortKey": 2,
                "url": "http://125.70.9.147:8009/analystrunner/5b641e16-4f95-42dd-872c-3cd5b82991f5"
              },
              {
                "id": "66040403",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS29",
                "name": "吸纳就业情况分析",
                "parentId": "660404",
                "showType": 1,
                "sortKey": 3,
                "url": "http://125.70.9.147:8009/analystrunner/c596c28a-d2f4-41c4-bbd3-d17704bf67a3"
              },
              {
                "id": "66040404",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS101",
                "name": "纳税情况分析",
                "parentId": "660404",
                "showType": 1,
                "sortKey": 4,
                "url": "http://125.70.9.147:8009/analystrunner/bb653a35-ecb0-46c5-94d7-d9b657343d88"
              }
            ],
            "id": "660404",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS26",
            "name": "外资企业发展扶持分析",
            "parentId": "6604",
            "showType": 0,
            "sortKey": 4
          },
          {
            "children": [
              {
                "id": "66040501",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS31",
                "name": "品牌商标分布情况分析",
                "parentId": "660405",
                "showType": 1,
                "sortKey": 1,
                "url": "http://125.70.9.147:8009/analystrunner/a21016f8-aae8-4b1f-8ce3-33ab5358dcf7"
              },
              {
                "id": "66040502",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS32",
                "name": "全市所有商标情况分析",
                "parentId": "660405",
                "showType": 1,
                "sortKey": 2,
                "url": "http://125.70.9.147:8009/analystrunner/1ab58d13-ac5e-4045-9611-91be6c1bacce"
              }
            ],
            "id": "660405",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS30",
            "name": "品牌黄页",
            "parentId": "6604",
            "showType": 0,
            "sortKey": 5
          },
          {
            "children": [
              {
                "id": "66040601",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS34",
                "name": "整体情况分析",
                "parentId": "660406",
                "showType": 1,
                "sortKey": 1,
                "url": "http://125.70.9.147:8009/analystrunner/00e5afee-37ba-4b8a-9169-0889f0c8a65b"
              },
              {
                "id": "66040602",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS35",
                "name": "准入情况分析",
                "parentId": "660406",
                "showType": 1,
                "sortKey": 2,
                "url": "http://125.70.9.147:8009/analystrunner/5dd624d4-363e-4d62-bf3d-326036e4c5a2"
              },
              {
                "id": "66040603",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS36",
                "name": "退出情况分析",
                "parentId": "660406",
                "showType": 1,
                "sortKey": 3,
                "url": "http://125.70.9.147:8009/analystrunner/fdec4930-8cad-4545-9d4a-675c207affd3"
              },
              {
                "id": "66040604",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS37",
                "name": "净增情况分析",
                "parentId": "660406",
                "showType": 1,
                "sortKey": 4,
                "url": "http://125.70.9.147:8009/analystrunner/7f078f93-1049-4308-b15c-2c1d618e3270"
              },
              {
                "id": "66040605",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS38",
                "name": "变更情况分析",
                "parentId": "660406",
                "showType": 1,
                "sortKey": 5,
                "url": "http://125.70.9.147:8009/analystrunner/5aadb36f-e3a8-4541-90c6-3e7000747501"
              },
              {
                "id": "66040606",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS40",
                "name": "迁移情况分析",
                "parentId": "660406",
                "showType": 1,
                "sortKey": 6,
                "url": "http://125.70.9.147:8009/analystrunner/4fa60b12-73b7-4cf8-a679-642117d0e94c"
              },
              {
                "id": "66040607",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS41",
                "name": "生命周期分析",
                "parentId": "660406",
                "showType": 1,
                "sortKey": 7,
                "url": "http://125.70.9.147:8009/analystrunner/451cf3e9-d83f-4ce6-a773-2e7b94c04982"
              },
              {
                "id": "66040608",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS42",
                "name": "投资人情况分析",
                "parentId": "660406",
                "showType": 1,
                "sortKey": 8,
                "url": "http://125.70.9.147:8009/analystrunner/dbdb57d4-7a87-4270-b21a-fefd0ac2971c"
              },
              {
                "id": "66040609",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS43",
                "name": "股权出质和动产抵押情况分析",
                "parentId": "660406",
                "showType": 1,
                "sortKey": 9,
                "url": "http://125.70.9.147:8009/analystrunner/5a8057d7-659c-4f60-803c-b936c47a1178"
              }
            ],
            "id": "660406",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS33",
            "name": "市场主体发展情况分析",
            "parentId": "6604",
            "showType": 0,
            "sortKey": 6
          },
          {
            "children": [
              {
                "id": "66040701",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS45",
                "name": "企业个体画像",
                "parentId": "660407",
                "showType": 1,
                "sortKey": 1,
                "url": "http://125.70.9.147:8009/analystrunner/a3758b66-f80c-4639-aa0c-be58fd286ee0"
              },
              {
                "id": "66040702",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS46",
                "name": "企业群体画像",
                "parentId": "660407",
                "showType": 1,
                "sortKey": 2,
                "url": "http://125.70.9.147:8009/analystrunner/78cd6d87-4fd8-421a-8101-4ae17342fac8"
              },
              {
                "id": "66040703",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS47",
                "name": "企业商谱分析",
                "parentId": "660407",
                "showType": 1,
                "sortKey": 3,
                "url": "http://178.16.39.107:8280/BusinessEnterpriseAnalysis.html"
              },
              {
                "id": "66040704",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS49",
                "name": "企业影响力分析",
                "parentId": "660407",
                "showType": 1,
                "sortKey": 4,
                "url": "http://125.70.9.147:8009/analystrunner/3a0f449c-8035-450d-8c49-eae2ad3ec01e"
              },
              {
                "id": "66040705",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS50",
                "name": "企业上下游分析",
                "parentId": "660407",
                "showType": 1,
                "sortKey": 5,
                "url": "http://125.70.9.147:8009/analystrunner/aacf84ea-683f-478d-9434-b92ecc1f8714"
              },
              {
                "id": "66040706",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS51",
                "name": "企业关联关系分析",
                "parentId": "660407",
                "showType": 1,
                "sortKey": 6,
                "url": "http://178.16.39.107:8280/RelatedTransactionAnalysis.html"
              },
              {
                "id": "66040707",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS52",
                "name": "企业商群分析",
                "parentId": "660407",
                "showType": 1,
                "sortKey": 7,
                "url": "http://125.70.9.147:8009/analystrunner/09ed37c3-c63f-4584-b7f3-9fd58be5e999"
              }
            ],
            "id": "660407",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS44",
            "name": "企业多维画像",
            "parentId": "6604",
            "showType": 0,
            "sortKey": 7
          },
          {
            "children": [
              {
                "id": "66040801",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS54",
                "name": "主体分布图",
                "parentId": "660408",
                "showType": 1,
                "sortKey": 1,
                "url": "http://125.70.9.147:8009/analystrunner/506ee33b-174c-474e-a5d5-407d19ee953c"
              },
              {
                "id": "66040802",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS55",
                "name": "主体迁移分析",
                "parentId": "660408",
                "showType": 1,
                "sortKey": 2,
                "url": "http://125.70.9.147:8009/analystrunner/9b208067-2088-4e1e-9d2a-dfe045cdc149"
              },
              {
                "id": "66040803",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS56",
                "name": "主体生命周期",
                "parentId": "660408",
                "showType": 1,
                "sortKey": 3,
                "url": "http://125.70.9.147:8009/analystrunner/7bd6d7a1-aac0-482f-8948-55e80ae6fea1"
              },
              {
                "id": "66040804",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS57",
                "name": "行业发展预测",
                "parentId": "660408",
                "showType": 1,
                "sortKey": 4,
                "url": "http://125.70.9.147:8009/analystrunner/680d4be1-9e05-476d-aea8-b0fa5aa8ef2f"
              },
              {
                "id": "66040805",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS58",
                "name": "主体新增与退出分析",
                "parentId": "660408",
                "showType": 1,
                "sortKey": 5,
                "url": "http://125.70.9.147:8009/analystrunner/396519e6-4b50-4551-af4a-b1d38b98c9f1"
              },
              {
                "id": "66040806",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS59",
                "name": "专题监管分析",
                "parentId": "660408",
                "showType": 1,
                "sortKey": 6,
                "url": "http://125.70.9.147:8009/analystrunner/16720d21-93ba-4e9c-ae05-41f0e776896e"
              },
              {
                "id": "66040807",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS60",
                "name": "区域对比分析",
                "parentId": "660408",
                "showType": 1,
                "sortKey": 7,
                "url": "http://125.70.9.147:8009/analystrunner/764911e3-0f52-41d9-919f-c920b9b1e79a"
              },
              {
                "id": "66040808",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS61",
                "name": "自助分析",
                "parentId": "660408",
                "showType": 1,
                "sortKey": 8,
                "url": "http://125.70.9.147:8009/analystui/"
              },
              {
                "id": "66040809",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS63",
                "name": "实时监控大屏",
                "parentId": "660408",
                "showType": 1,
                "sortKey": 9,
                "url": "http://www.baidu.com"
              }
            ],
            "id": "660408",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS53",
            "name": "领导驾驶舱",
            "parentId": "6604",
            "showType": 0,
            "sortKey": 8
          }
        ],
        "id": "6604",
        "isEnable": 1,
        "isShow": false,
        "menuCode": "GSGL5",
        "name": "市场综合监管服务应用子系统",
        "parentId": "-1",
        "showType": 0,
        "sortKey": 4
      },
      {
        "children": [
          {
            "id": "660501",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "BMS_USER_",
            "name": "用户管理",
            "parentId": "6605",
            "showType": 1,
            "sortKey": 1,
            "url": "http://10.0.8.115/bms/security/UserManage.jsp"
          },
          {
            "id": "660502",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "BMS_GROUP_",
            "name": "用户组管理",
            "parentId": "6605",
            "showType": 1,
            "sortKey": 2,
            "url": "http://10.0.8.115/bms/security/GroupManage.jsp"
          },
          {
            "id": "660503",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS62",
            "name": "区域管理",
            "parentId": "6605",
            "showType": 1,
            "sortKey": 3,
            "url": "http://10.0.8.115/bms/security/AreaManage.jsp"
          },
          {
            "id": "660504",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "BMS_DEPT_",
            "name": "部门管理",
            "parentId": "6605",
            "showType": 1,
            "sortKey": 4,
            "url": "http://10.0.8.115/bms/security/DeptManage.jsp"
          },
          {
            "id": "660505",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "BMS_ROLE_TY_",
            "name": "角色权限管理",
            "parentId": "6605",
            "showType": 1,
            "sortKey": 5,
            "url": "http://10.0.8.115/bms/security/RoleManage.jsp"
          },
          {
            "children": [
              {
                "id": "66050601",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS70",
                "name": "操作日志",
                "parentId": "660506",
                "showType": 1,
                "sortKey": 1,
                "url": "http://10.0.8.115/bms/system/config/operateLogManage.jsp"
              },
              {
                "id": "66050602",
                "isEnable": 1,
                "isShow": false,
                "menuCode": "GS71",
                "name": "系统日志",
                "parentId": "660506",
                "showType": 1,
                "sortKey": 2,
                "url": "http://10.0.8.115/bms/system/config/RunLogManage.jsp"
              }
            ],
            "id": "660506",
            "isEnable": 1,
            "isShow": false,
            "name": "日志管理",
            "parentId": "6605",
            "showType": 0,
            "sortKey": 6
          },
          {
            "id": "660507",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS73",
            "name": "WEB集群和负载均衡",
            "parentId": "6605",
            "showType": 1,
            "sortKey": 7,
            "url": "http://10.0.8.115/bms/security/LoadBalance.jsp"
          },
          {
            "id": "660508",
            "isEnable": 1,
            "isShow": false,
            "menuCode": "GS74",
            "name": "系统配置",
            "parentId": "6605",
            "showType": 1,
            "sortKey": 8,
            "url": "http://10.0.8.115/bms/system/config/SystemConfig.jsp"
          }
        ],
        "id": "6605",
        "isEnable": 1,
        "isShow": false,
        "menuCode": "POWER_",
        "name": "系统管理",
        "parentId": "-1",
        "showType": 0,
        "sortKey": 5
      }
    ];

    closeTab(tab) {
        this.tabs.splice(this.tabs.indexOf(tab), 1);
    };

    newTab() {
        let i = 10;
        this.tabs.push({
            name: 'New Tab',
            index: ++i
        });
    };
}