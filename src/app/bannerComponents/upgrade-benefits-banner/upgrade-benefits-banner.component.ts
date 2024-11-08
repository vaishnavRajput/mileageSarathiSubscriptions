import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UPGRADE_BENEFITS_BANNER } from 'src/app/constants';
import { UPGRADE_ICON } from 'src/app/constants';
import { MINIMIZE_ICON } from 'src/app/constants';

@Component({
  selector: 'app-upgrade-benefits-banner',
  templateUrl: './upgrade-benefits-banner.component.html',
  styleUrls: ['./upgrade-benefits-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UpgradeBenefitsBannerComponent implements OnInit{
  upgradeBannerLabels = UPGRADE_BENEFITS_BANNER;
  upgradeBannerIcon !: string;
  labelText = 'Upgrade to <span class="highlight">Assisted Journey</span> for dedicated remote support';
  minimizeIcon !: string;

  ngOnInit(): void {
    this.upgradeBannerIcon = UPGRADE_ICON;
    this.minimizeIcon = MINIMIZE_ICON

  } 
}
