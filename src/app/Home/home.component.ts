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
    menus = [];                           //保存请求到的所有的菜单数据
    selectedIndex: number = 0;            //保存tab标签当前选中的标签序列
    menuItemId: string = "";              //保存菜单栏操作的第一层菜单的id
    childItemId: string = "";             //保存菜单栏操作的第二层菜单的id
    tabs = [];                            //保存tab标签栏中的数据

    ngOnInit() {
        /**
         * 生命周期钩子函数：当Angular初始化完成数据绑定的输入属性后，用来初始化指令或者组件。
         * @type {[type]}
         */
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
            me.setDefaultTab(me.menus);//设置默认打开的标签页
        });
    };

    setDefaultTab(menus) {
        /**
         * 设置页面打开的默认展开标签页
         * @type {[Array: 请求到的所有菜单数据]}
         */
        let me = this,
            parm,
            breadcrumbArray = [];
        if(menus.length !== 0){
            parm = me.menus[0];
            breadcrumbArray.unshift(parm.name);
            for(let i=0; i < 3; i++){
                if(parm.children && parm.children.length !== 0) {
                    parm = parm.children[0];
                    breadcrumbArray.unshift(parm.name);
                }
            }
        } else {
            return ;
        }
        me.tabs.push({
            name: parm.name,
            index: parm.id,
            tabBreadcrumb: breadcrumbArray
        });
    };
    
    closeTab(tab) {
        /**
         * 关闭当前tab页签方法
         * @type {[Object: 点击的当前tab对象]}
         */
        let me = this;
        if(me.tabs.indexOf(tab) < me.selectedIndex){
            //tabs删除功能优化，保证删除当前选中的tab之前的tab时，页面显示的还是当前tab
            me.selectedIndex--;
        }
        this.tabs.splice(me.tabs.indexOf(tab), 1);
    };

    openNewTab(parm) {
        /**
         * 打开新的tab标签页方法
         * @type {[Object: 当前parm对象]}
         */
        let arg = Array.from(arguments),
            me = this,
            hasRepeat = false,
            breadcrumbArray = [];
        // 打开新的标签页之前进行标签去重
        me.tabs.map((value) => {
            if (value.index === parm.id) {
                hasRepeat = true;
            }
        });
        // 如果在tabs中有重复的数据，则不添加该项到tabs数组中
        if(hasRepeat) {
            me.tabs.map((value, index) => {
                if(value.index === parm.id) {
                    me.selectedIndex = index;
                }
            });
            return;
        };
        arg.map((value) => {
            breadcrumbArray.unshift(value.name);
        });
        me.selectedIndex = me.tabs.length;
        me.tabs.push({
            name: parm.name,
            index: parm.id,
            tabBreadcrumb: breadcrumbArray
        });    
    };

    onClickMenuItem(_id) {
        /**
         * 用来控制第一层菜单隐藏和显示的方法
         * @type {[String: 用来表示当前操作的菜单的id]}
         */
        let me = this;
        if(_id === me.menuItemId) {
            me.menuItemId = "";
        } else {
            me.menuItemId = _id;
        }
    };

    onClickChildItem(_id) {
        /**
         * 用来控制第二层菜单隐藏和显示的方法
         * @type {[String: 用来表示当前操作的菜单的id]}
         */
        let me = this;
        if(_id === me.childItemId) {
            me.childItemId = "";
        } else {
            me.childItemId = _id;
        }
    };
}