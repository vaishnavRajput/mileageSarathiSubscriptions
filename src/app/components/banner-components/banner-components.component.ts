import { Component, OnInit } from '@angular/core';
import { SUBSCRIPTION_BANNER } from 'src/app/constants';
import { DOTTED_ARROW } from 'src/app/constants';
import { SUBSCRIBE_BANNER_LABELS } from 'src/app/constants';
import { min, Subscription } from 'rxjs';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout"
import { MINIMIZE_ICON } from 'src/app/constants';

@Component({
  selector: 'app-banner-components',
  templateUrl: './banner-components.component.html',
  styleUrls: ['./banner-components.component.scss']
})
export class BannerComponentsComponent implements OnInit {

  subscribeBannerLabels = SUBSCRIBE_BANNER_LABELS;
  subscriptionSvg !:string;
  dottedArrowSvg !: string;
  breakpointSubscription!: Subscription;
  isMobileView: boolean = false;
  minimizeIcon!: string;
  minimizeBanner: boolean = false;


  constructor(private breakpointObserver: BreakpointObserver){}

  ngOnInit(): void {
    this.subscriptionSvg = SUBSCRIPTION_BANNER;
    this.dottedArrowSvg = DOTTED_ARROW;
    this.minimizeIcon = MINIMIZE_ICON;
    

    this.breakpointSubscription = this.breakpointObserver
      .observe(['(max-width: 26.563rem)'])
      .subscribe(result => {
        this.isMobileView = result.matches;
      })
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }

  handleMinimize(){
    this.minimizeBanner = !this.minimizeBanner
  }
}
