import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LessonsDay1Component } from './pages/lessons-day1/lessons-day1.component';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [

  {
    path: 'index',
    component: IndexComponent,
    // 路由守卫
    canActivate:[AuthGuard],
    children: [
      {
        path: 'lessons-day1',
        component: LessonsDay1Component,
      }
    ]
  },
  // 重定向页面
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  // 匹配不到路由时调用；
  {
    path: '**',
    component: NoFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
