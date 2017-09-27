import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IndexPageComponent } from './indexPage.component';

import { TopLineComponent } from './components/topLine/topLine.component';

describe('IndexPageComponent', () => {
    let component: IndexPageComponent;
    let fixture: ComponentFixture<IndexPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                IndexPageComponent,
                TopLineComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IndexPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});