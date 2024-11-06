import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MILEAGE_SARATHI_SUBSCRIPTION_LABELS } from 'src/app/constants';
@Component({
  selector: 'app-mileage-sarthi-subscription',
  templateUrl: './mileage-sarthi-subscription.component.html',
  styleUrls: ['./mileage-sarthi-subscription.component.scss']
})
export class MileageSarthiSubscriptionComponent implements OnInit {
 
  @Input() plan : any;
  @Input() index: number = 0;
  constructor(private sanitizer: DomSanitizer){}
  subHeadingBold : string = '';
  restSubHeading: string = ''
  subscriptionLabels = MILEAGE_SARATHI_SUBSCRIPTION_LABELS
  

  ngOnInit(): void {
    const words = this.plan.subHeading.split(' ')
    this.subHeadingBold = words.slice(0,4).join(' ')
     this.restSubHeading = words.slice(4).join(' ');
  }

    



}
