import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from '../config/api';
@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {
  errorInfo: {} | string = {};
  errorInfo$ = new BehaviorSubject(this.errorInfo);

  constructor(private http: HttpClient) {}

  // 第一种方法取参
  getWeatherInfo1(id: number = 12382165, location: string = '杭州') {
    // return this.http.get(API.getWeather + `appid=${id}&city=${location}`);
    return this.http.post(API.getWeather, { appid: id, city: location });
    // return this.http.post(API.getWeather, {}, { params: { appid: id, city: location } });
    // return this.http.get(API.getWeather, { params: { appid: id, city: location } });
  }

  // 第二种方法取参
  getErrorData2(productNum: string) {
    return this.http
      .get(API.getErrorData + `?productNum=${productNum}`)
      .subscribe({
        next: (res: any) => {
          this.errorInfo$.next(res);
        },
        error: (err) => {
          this.errorInfo$.error(
            'xxx$.error(xxx)，只会发布【一次】订阅，不会重复触发！'
          );
        },
        //完成时不传参;也无法传参
        complete: () => {
          this.errorInfo$.complete();
        },
      });
  }
}
