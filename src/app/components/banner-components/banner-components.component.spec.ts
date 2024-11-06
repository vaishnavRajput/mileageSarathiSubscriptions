import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponentsComponent } from './banner-components.component';

describe('BannerComponentsComponent', () => {
  let component: BannerComponentsComponent;
  let fixture: ComponentFixture<BannerComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
