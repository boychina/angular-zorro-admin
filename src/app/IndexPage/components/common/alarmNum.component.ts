import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule, RequestOptions, Headers } from '@angular/http';

@Component({
    selector: 'alarm-num',
    template: `
        <p>Hello World!</p>
    `,
    styles: []
})

export class AlarmNum {
    constructor(private http: Http) {

    }

    ngOnInit() {

    }
}