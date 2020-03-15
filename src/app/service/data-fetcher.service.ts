import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {
  private url:string = "../../assets/"
  constructor(private http: HttpClient) { 
  }

  getDataFrom(from:string) {
    const ct = new Date().getTime();
    return this.http.get(`${this.url}${from}?now=${ct}`);
  }


}
