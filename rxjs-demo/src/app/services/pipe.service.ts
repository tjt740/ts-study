import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PipeService {
  number = 0;
  number$ = new BehaviorSubject(this.number);

  constructor() {}

  // 操作list
  operateList() {
    setInterval(() => {
      this.number$.next(++this.number);
    }, 1000);
  }
}
