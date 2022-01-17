import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  initString = 0;
  initString$ = new Subject()
  constructor() { }

  fun1() {
    this.initString$.next('fun1')
  }

  fun2() {
    this.initString$.next('fun2')
  }
}
