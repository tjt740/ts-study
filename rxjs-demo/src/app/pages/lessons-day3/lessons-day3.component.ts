import { Component, OnInit } from '@angular/core';
import { ClearObservableService } from '../../services/clear-observable.service';
@Component({
  selector: 'app-lessons-day3',
  templateUrl: './lessons-day3.component.html',
  styleUrls: ['./lessons-day3.component.less'],
})
export class LessonsDay3Component implements OnInit {
  initNumber: number = 0;
  isDisable1: boolean = false;
  isDisable2: boolean = false;
  subscription: any;

  constructor(private clearOb: ClearObservableService) {}

  ngOnInit(): void {
    this.subscription = this.clearOb.number$.subscribe({
      next: (res) => {
        console.log(res);
        this.initNumber = res;
      },
      error: (err) => {
        throw new Error(err); // 抛错
      },
      complete: () => {
        this.isDisable2 = true;
        console.log('完成订阅');
      },
    });
  }

  add() {
    // 调用service, 使Observable 每秒发布通知。
    setInterval(() => {
      this.clearOb.addNumber(this.initNumber);
    }, 1000);

    //5秒后, 取消订阅Observable
    setTimeout(() => {
      this.subscription.unsubscribe();
      this.isDisable1 = true;
    }, 5000);
  }


  minus() {
    this.clearOb.minusNumber(this.initNumber);
  }

}
