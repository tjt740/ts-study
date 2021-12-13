import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClearObservableService {
  number: number = 0;
  number$ = new BehaviorSubject(this.number);
  constructor() {}

  addNumber(val: number = 0) {
    this.number = ++val;
    this.number$.next(this.number);
  }

  minusNumber(val: number) {
    setInterval(() => {
      this.number = --val;
      this.number$.next(this.number);
    }, 1000);
    setTimeout(() => {
      // 完成发布
        this.number$.complete();
    },5000)

  }
}
