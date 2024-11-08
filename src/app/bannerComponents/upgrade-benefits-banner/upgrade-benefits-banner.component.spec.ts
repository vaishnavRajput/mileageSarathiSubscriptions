import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeBenefitsBannerComponent } from './upgrade-benefits-banner.component';

describe('UpgradeBenefitsBannerComponent', () => {
  let component: UpgradeBenefitsBannerComponent;
  let fixture: ComponentFixture<UpgradeBenefitsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeBenefitsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeBenefitsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
