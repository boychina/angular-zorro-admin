import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLineComponent } from './topLine.component';

describe('TopLineComponent', () => {
    let component: TopLineComponent;
    let fixture: ComponentFixture<TopLineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [ TopLineComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TopLineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});