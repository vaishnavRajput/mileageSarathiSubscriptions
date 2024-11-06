import { Component, Input } from '@angular/core';
import { COST_SAVING_BANNER_LABELS } from 'src/app/constants';

@Component({
  selector: 'app-cost-saving-banner',
  templateUrl: './cost-saving-banner.component.html',
  styleUrls: ['./cost-saving-banner.component.scss']
})
export class CostSavingBannerComponent {
  costSavingLabels = COST_SAVING_BANNER_LABELS
  
  @Input() fuelEfficiency !: number;
   @Input() nationalBenchmark !: number;
  @Input() potentialSaving !: number;
}
