import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';

@Component({
    selector: 'indexPage',
    templateUrl: './indexpage.component.html',
    styleUrls: ['./indexpage.component.scss'],
    animations: [routerTransition()]
})

export class IndexPageComponent implements OnInit {
    constructor(public router: Router, private http: Http) {
        
    }

    ngOnInit () {

    }
}