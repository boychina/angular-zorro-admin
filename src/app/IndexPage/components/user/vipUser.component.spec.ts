import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipUserComponent } from './vipUser.component';

describe('VipUserComponent', () => {
    let component: VipUserComponent;
    let fixture: ComponentFixture<VipUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [ VipUserComponent ]
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
    })
})