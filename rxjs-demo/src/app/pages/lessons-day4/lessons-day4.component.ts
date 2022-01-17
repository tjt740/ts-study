import { Component, OnInit } from '@angular/core';
import { PipeService } from 'src/app/services/pipe.service';
import { map, filter, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-lessons-day4',
  templateUrl: './lessons-day4.component.html',
  styleUrls: ['./lessons-day4.component.less'],
})
export class LessonsDay4Component implements OnInit {
  initNumber: any;
  constructor(private operate: PipeService) {}

  ngOnInit(): void {
    this.operate.number$
      .pipe(
        filter((value) => {
          return value < 10;
        })
      )
      .subscribe({
        next: (x) => {
          this.initNumber = x;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {},
      });
  }

  delSpacer() {
    this.operate.operateList();
  }
}
