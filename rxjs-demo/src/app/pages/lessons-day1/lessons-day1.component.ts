import { Component, OnInit } from '@angular/core';
import { OperatorsService } from '../../services/operators.service';
@Component({
  selector: 'app-lessons-day1',
  templateUrl: './lessons-day1.component.html',
  styleUrls: ['./lessons-day1.component.less'],
})
export class LessonsDay1Component implements OnInit {
  list: number[] | any[] = [];
  constructor(private changeList: OperatorsService) {}

  ngOnInit(): void {
    this.changeList.list$.subscribe({
      next: (val) => {
        console.log('正确信息val:', val);
        this.list = [val];
        //  Tjt: 如果用 this.list = val 将不会刷新视图， 数据是变化的。  ★★★  ↓↓↓
        // this.list =val
      },
      error: (err) => {
        console.log('错误时信息:',err);
      },
      complete: () => {
        console.log('当触发complete时执行!');
      },
    });
  }

  pushRandomForArray() {
    this.changeList.addNumberForArray(Math.random());
  }
}
