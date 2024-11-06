import { Component, OnInit } from '@angular/core';
import { SUBSCRIPTION_BANNER } from 'src/app/constants';
import { DOTTED_ARROW } from 'src/app/constants';
import { SUBSCRIBE_BANNER_LABELS } from 'src/app/constants';


@Component({
  selector: 'app-banner-components',
  templateUrl: './banner-components.component.html',
  styleUrls: ['./banner-components.component.scss']
})
export class BannerComponentsComponent implements OnInit {

  subscribeBannerLabels = SUBSCRIBE_BANNER_LABELS;
  subscriptionSvg !:string;
  dottedArrowSvg !: string;

  ngOnInit(): void {
    this.subscriptionSvg = SUBSCRIPTION_BANNER
    this.dottedArrowSvg = DOTTED_ARROW
  }
}
