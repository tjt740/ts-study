import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  initLocationUrl = '/index';
  initLocationUrl$ = new BehaviorSubject(this.initLocationUrl);
  constructor() { }

  getLocationInfo(url: string = 'index') {
    this.initLocationUrl = url;
    this.initLocationUrl$.next(this.initLocationUrl);
  }

}
