import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../../services/get-weather.service';
@Component({
  selector: 'app-lessons-day2',
  templateUrl: './lessons-day2.component.html',
  styleUrls: ['./lessons-day2.component.less'],
})
export class LessonsDay2Component implements OnInit {
  isLoading1 = false;
  isLoading2 = false;
  inputValue: {} | string = '';
  isDisable = false;
  constructor(private setWeatherInfo: GetWeatherService) {}

  ngOnInit(): void {
    this.setWeatherInfo.errorInfo$.subscribe({
      next: (successData) => {
        console.log('successData:', successData);
      },
      error: (errData) => {
        this.isLoading2 = false;
        this.isDisable = true;
        this.inputValue = '请求失败，只会执行一次，再次点击不会重复触发！';
        console.log('errData:', errData);
      },
      complete: () => {
        console.log('完成');
      },
    });
  }

  //  第一种:
  getWeatherInfo1() {
    this.isLoading1 = true;
    this.setWeatherInfo.getWeatherInfo1().subscribe((res: any) => {
      if (!res.errmsg) {
        this.isLoading1 = false;
        this.inputValue = JSON.stringify(res);
        console.log('天气数据:', res);
      }
    });
  }

  //  第二种:
  getErrorData() {
    this.isLoading2 = true;
    this.setWeatherInfo.getErrorData2('GKS28ABD2214444');
  }
}
