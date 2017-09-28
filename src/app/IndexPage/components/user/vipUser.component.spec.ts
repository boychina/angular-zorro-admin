import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipUserComponent } from './vipUser.component';
import { AlarmNum } from '../common/alarmNum.component';

describe('VipUserComponent', () => {
    let component: VipUserComponent;
    let fixture: ComponentFixture<VipUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [ VipUserComponent, AlarmNum ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VipUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    })
})