import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';

import { NzDemoButtonTypeComponent } from './app.child';
import { NzDemoTableSelectionAndOperationComponent } from './app.table';

@NgModule({
    declarations: [
        AppComponent,
        NzDemoButtonTypeComponent,
        NzDemoTableSelectionAndOperationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        NgZorroAntdModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

