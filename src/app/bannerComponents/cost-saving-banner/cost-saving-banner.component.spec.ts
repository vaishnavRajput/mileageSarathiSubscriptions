import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostSavingBannerComponent } from './cost-saving-banner.component';

describe('CostSavingBannerComponent', () => {
  let component: CostSavingBannerComponent;
  let fixture: ComponentFixture<CostSavingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostSavingBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostSavingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
