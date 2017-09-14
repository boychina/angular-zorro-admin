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