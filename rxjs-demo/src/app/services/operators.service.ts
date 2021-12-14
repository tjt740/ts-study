import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OperatorsService {
  list: Array<number> = [];
  list$ = new BehaviorSubject(this.list);
  constructor() { }

  addNumberForArray(val: number) {
    this.list.push(val)
    this.list$.next(this.list);

    //  如果list长度大于等于3 就不再订阅;
    if (this.list.length >= 3) {
      this.list$.complete() // 完成订阅(停止订阅)
    }
  }
}
