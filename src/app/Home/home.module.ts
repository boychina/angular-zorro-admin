import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ElesDirective } from './else.directive';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [HomeComponent, ElesDirective]
})

export class HomeModule {
    
}