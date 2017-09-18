import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})

export class HomeComponent implements OnInit {
    constructor (public router: Router, private http: Http) {

    }

    url: string = 'http://127.0.0.1:3000/HomeRoute/getMenusData';
    menus = [];
    ngOnInit() {
        let me = this;
        let body = JSON.stringify({
            code : "mk200"
        });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        me.http.post(this.url, body, options).toPromise().then((res) => {
            //将获取到的菜单数据赋值为菜单数据
            console.log(res.json());
            me.menus = res.json();
        });
    }

    
    onClick(parm) {
        
    };

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