import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  sideNavSelect = new Subject<any>();

  constructor() { }

  getSideNavSelect() {
    return this.getSideNavSelect;
  }

  setSideNaveSelect(val) {
    this.sideNavSelect.next(val);
  }

}
