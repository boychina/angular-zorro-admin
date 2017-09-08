import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nz-demo-button-type',
    template: `
        <button nz-button [nzType]="'primary'">
            <span>刷新</span>
        </button>
        <button nz-button [nzType]="'default'">
            <span>搜索</span>
        </button>
        <button nz-button [nzType]="'dashed'">
            <span>新增</span>
        </button>
        <button nz-button [nzType]="'danger'">
            <span>删除</span>
        </button>`,
    styles: []
})

export class NzDemoButtonTypeComponent implements OnInit {
    constructor () {

    }
    ngOnInit () {

    }
}