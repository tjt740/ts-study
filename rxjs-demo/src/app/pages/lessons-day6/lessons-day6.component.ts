import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
@Component({
  selector: 'app-lessons-day6',
  templateUrl: './lessons-day6.component.html',
  styleUrls: ['./lessons-day6.component.less']
})
export class LessonsDay6Component implements OnInit {

  number: any;
  constructor(
    private subject:SubjectService
  ) { }

  ngOnInit(): void {
    this.subject.initString$.subscribe((x1) => {
      console.log('x1:',x1)
    })
    this.subject.initString$.subscribe((x2) => {
      console.log('x1:',x2)
     })
  }

  fn1() {
    this.subject.fun1()
  }
  fn2() {

    this.subject.fun2()
   }
}
