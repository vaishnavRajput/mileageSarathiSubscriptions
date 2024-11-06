import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MileageSarthiSubscriptionComponent } from './components/mileage-sarthi-subscription/mileage-sarthi-subscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './Material.Module';
import { BannerComponentsComponent } from './components/banner-components/banner-components.component';
import { CostSavingBannerComponent } from './bannerComponents/cost-saving-banner/cost-saving-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MileageSarthiSubscriptionComponent,
    BannerComponentsComponent,
    CostSavingBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
