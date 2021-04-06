import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './page/detail/detail.component';
import { HomeComponent } from './page/home/home.component';
import { PayComponent } from './page/pay/pay.component';
import { loginComponent } from "./page/login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { DashboardComponent } from './page/admin/page/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'detail/:id', component: DetailComponent ,canActivate: [AuthGuard] },
  { path: 'pay', component: PayComponent ,canActivate: [AuthGuard] },
  { path: 'login', component: loginComponent  ,canActivate: [AuthGuard] },
  { path: 'admin', component: DashboardComponent  ,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

