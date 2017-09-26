import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AngularEchartsModule } from 'ngx-echarts';

import { IndexPageRoutingModule } from './indexPage-routing.module';
import { IndexPageComponent } from './indexPage.component';

@NgModule({
    imports: [
        CommonModule,
        IndexPageRoutingModule,
        NgZorroAntdModule,
        AngularEchartsModule
    ],
    declarations: [IndexPageComponent]
})

export class IndexPageModule {
    
}