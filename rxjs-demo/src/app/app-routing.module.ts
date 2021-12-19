import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsDay1Component } from './pages/lessons-day1/lessons-day1.component';
import { LessonsDay2Component } from './pages/lessons-day2/lessons-day2.component';
import { LessonsDay3Component } from './pages/lessons-day3/lessons-day3.component';
import { LessonsDay4Component } from './pages/lessons-day4/lessons-day4.component';
import { LessonsDay5Component } from './pages/lessons-day5/lessons-day5.component';
import { LessonsDay6Component } from './pages/lessons-day6/lessons-day6.component';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    // 路由守卫
    canActivate: [AuthGuard],
    children: [
      {
        path: 'lessons-day1',
        component: LessonsDay1Component,
      },
      {
        path: 'lessons-day2',
        component: LessonsDay2Component,
      },
      {
        path: 'lessons-day3',
        component: LessonsDay3Component,
      },
      {
        path: 'lessons-day4',
        component: LessonsDay4Component,
      },
      {
        path: 'lessons-day5',
        component: LessonsDay5Component,
      },
      {
        path: 'lessons-day6',
        component: LessonsDay6Component,
      },
    ],
  },
  // 重定向页面
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  // 匹配不到路由时调用；
  {
    path: '**',
    component: NoFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
