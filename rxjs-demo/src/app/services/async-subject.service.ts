import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsyncSubjectService {
  initNumber = 0;
  initNumber$ = new AsyncSubject();
  constructor() {}

  add() {

    setInterval(() => {
       // 每秒发布订阅 +1
      this.initNumber$.next(++this.initNumber);
      console.log(this.initNumber);  // 1 2 3 4 5
    }, 1000);

    // 五秒的时候发布完成订阅通知
    setTimeout(() => {
      this.initNumber$.complete();
    }, 5000);
  }
}
