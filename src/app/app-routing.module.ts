import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './page/detail/detail.component';
import { HomeComponent } from './page/home/home.component';
import { PayComponent } from './page/pay/pay.component';
import { loginComponent } from "./page/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { DashboardComponent } from "./page/admin/page/film/dashboard.component";
import { DetailfilmComponent } from "./page/admin/page/detailfilm/detailphim.component";
import { AddphimComponent } from "./page/admin/page/addfilm/addphim.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail/:id', component: DetailComponent ,canActivate: [AuthGuard] },
  { path: 'pay', component: PayComponent ,canActivate: [AuthGuard] },
  { path: 'login', component: loginComponent },
  { path: 'admin/film', component: DashboardComponent},
  { path: 'admin/film/add', component: AddphimComponent},
  { path: 'admin/film/:id', component: DetailfilmComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

