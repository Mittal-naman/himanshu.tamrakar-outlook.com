import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataFetcherService } from '../../service/data-fetcher.service';
import { SubscriptionService } from 'src/app/service/subscription.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
  { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  sidebarData:any;
  sideItem:any;
  constructor(private router: Router,private dataFetcherService:DataFetcherService, private subscriptionService:SubscriptionService) { 
    this.dataFetcherService.getDataFrom("data/sidebar/sidebar.json").subscribe(r => {
      this.sidebarData = r;
      this.sideItem = Object.keys(this.sidebarData);
      console.log(this.sidebarData)
      this.onClick('india');
    })
  }

  ngOnInit() {}

  onClick(val) {
    const v = this.sidebarData[val];
    this.subscriptionService.setSideNaveSelect(v);
  }
}
