import { Component, OnInit } from '@angular/core';
declare const $: any;

import { SubscriptionService } from 'src/app/service/subscription.service';
import { DataFetcherService } from 'src/app/service/data-fetcher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardData: any = {
    first: {
      title: '',
      img: '',
      src: '',
      data: ''
    },
    second: {
      title: '',
      img: '',
      src: '',
      data: ''
    },
    third: {
      title: '',
      img: '',
      src: '',
      data: ''
    }
  }
  fromSide
  facts: any;
  totalFactsGroup: any;
  currentIndex:number = 0;
  constructor(private subscriptionService: SubscriptionService, private dataFetcherService: DataFetcherService) {
    this.subscriptionService.sideNavSelect.subscribe(r => {
      this.fromSide = r;
    })

    this.dataFetcherService.getDataFrom('data/facts/fact.json').subscribe(r => {
      this.facts = r;
      console.log(r)
      this.totalFactsGroup = this.facts.length;
      this.setCardData(this.facts[this.currentIndex]);
    })
  }

  setCardData(v) {
    this.cardData['first'] = v[0];
    this.cardData['second'] = v[1];
    this.cardData['third'] = v[2];
  }

  ngOnInit() {
  }

  onClick(arrow) {
    this.currentIndex += arrow;
    if(this.currentIndex < 0) {
      this.currentIndex = this.totalFactsGroup-1;
    } else {
      this.currentIndex %= this.totalFactsGroup;
    }
    this.setCardData(this.facts[this.currentIndex]);
    console.log(this.currentIndex)
  }
}
