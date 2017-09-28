import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AngularEchartsModule } from 'ngx-echarts';

import { IndexPageRoutingModule } from './indexPage-routing.module';

import { IndexPageComponent } from './indexPage.component';
import { TopLineComponent } from './components/topLine/topLine.component';
import { VipUserComponent } from './components/user/vipUser.component';
import { AlarmNum } from './components/common/alarmNum.component';

@NgModule({
    imports: [
        CommonModule,
        IndexPageRoutingModule,
        NgZorroAntdModule,
        AngularEchartsModule
    ],
    declarations: [
        IndexPageComponent,
        TopLineComponent,
        VipUserComponent,
        AlarmNum
    ]
})

export class IndexPageModule {
    
}