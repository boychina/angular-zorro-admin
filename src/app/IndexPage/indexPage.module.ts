import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// import { IndexPageRoutingModule } from './indexPage-routing.module';
import { IndexPageComponent } from './indexPage.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule
    ],
    declarations: [IndexPageComponent]
})

export class IndexPageModule {
    
}