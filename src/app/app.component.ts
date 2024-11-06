import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MileageSarthiSubscriptionComponent } from './components/mileage-sarthi-subscription/mileage-sarthi-subscription.component';
import { mileageSarthiSubscription } from './constants';
import { Subscription } from 'rxjs';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout"
import { MILEAGE_SARATHI_SUBSCRIPTION_LABELS } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'mileageSubscription';
  breakpointSubscription!: Subscription;
  subscriptionLabels= MILEAGE_SARATHI_SUBSCRIPTION_LABELS

  constructor(private breakpointObserver: BreakpointObserver){}

  subscriptionPlans = mileageSarthiSubscription;
  activeTab: number = 0;
  isMobileView: boolean = false;

  ngOnInit(): void {
    this.breakpointSubscription = this.breakpointObserver
      .observe(['(max-width: 20rem)'])
      .subscribe(result => {
        this.isMobileView = result.matches;
      })
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }

 
  setTab(index: number){
    this.activeTab = index;
  }
}
