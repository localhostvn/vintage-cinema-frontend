import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './page/detail/detail.component';
import { HomeComponent } from './page/home/home.component';
import { PayComponent } from './page/pay/pay.component';
import { loginComponent } from "./page/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
//admin
import { DashboardComponent } from "./page/admin/page/film/dashboard.component";
import { DetailfilmComponent } from "./page/admin/page/detailfilm/detailphim.component";
import { AddphimComponent } from "./page/admin/page/addfilm/addphim.component";
import { AdminCinemaComponent } from "./page/admin/page/cinema/cinema.component";
import { AdminShowComponent } from "./page/admin/page/show/show.component";
import { AdminAddShowComponent } from "./page/admin/page/addshow/addshow.component";
import { UpdateShowComponent } from "./page/admin/page/updateshow/updateshow.component";

const routes: Routes = [
  
  { path: 'detail/:id', component: DetailComponent ,canActivate: [AuthGuard] },
  { path: 'pay', component: PayComponent ,canActivate: [AuthGuard] },
  { path: 'login', component: loginComponent },
  { path: 'admin/film', component: DashboardComponent ,canActivate: [AuthGuard]},
  { path: 'admin/film/add', component: AddphimComponent ,canActivate: [AuthGuard]},
  { path: 'admin/film/:id', component: DetailfilmComponent ,canActivate: [AuthGuard]},
  { path: 'admin/cinema', component: AdminCinemaComponent ,canActivate: [AuthGuard]},
  { path: 'admin/show', component: AdminShowComponent ,canActivate: [AuthGuard]},
  { path: 'admin/show/add', component: AdminAddShowComponent ,canActivate: [AuthGuard]},
  { path: 'admin/show/update/:id', component: UpdateShowComponent ,canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

