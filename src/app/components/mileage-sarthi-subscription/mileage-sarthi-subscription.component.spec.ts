import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MileageSarthiSubscriptionComponent } from './mileage-sarthi-subscription.component';

describe('MileageSarthiSubscriptionComponent', () => {
  let component: MileageSarthiSubscriptionComponent;
  let fixture: ComponentFixture<MileageSarthiSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MileageSarthiSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MileageSarthiSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
