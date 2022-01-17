import { Component, OnInit } from '@angular/core';
import { AsyncSubjectService } from '../../services/async-subject.service';

@Component({
  selector: 'app-lessons-day5',
  templateUrl: './lessons-day5.component.html',
  styleUrls: ['./lessons-day5.component.less'],
})
export class LessonsDay5Component implements OnInit {
  number: any;

  constructor(private async: AsyncSubjectService) {}

  ngOnInit(): void {
    this.async.initNumber$.subscribe({
      next: (x) => {
        console.log('x', x);
        this.number = x;
      },
      error: (err) => {
        throw new Error(err);
      },
      complete: () => {
        console.log('接收完成订阅通知');
      },
    });
  }

  addNumber() {
    this.async.add();
  }
}
