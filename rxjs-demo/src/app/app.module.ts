import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Rxjs01Component } from './components/rxjs01/rxjs01.component';
import { LessonsDay1Component } from './pages/lessons-day1/lessons-day1.component';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// ng-zorro 组件
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IndexOpenComponent } from './components/index-open/index-open.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
// 服务
import { UtilsService } from './services/utils.service';
import { LessonsDay2Component } from './pages/lessons-day2/lessons-day2.component';
import { LessonsDay3Component } from './pages/lessons-day3/lessons-day3.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    Rxjs01Component,
    LessonsDay1Component,
    IndexComponent,
    NoFoundComponent,
    IndexOpenComponent,
    LessonsDay2Component,
    LessonsDay3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,


    // ng-zorro 组件
    NzLayoutModule,
    NzIconModule,
    NzButtonModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
