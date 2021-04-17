import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//user component
import { HomeComponent } from '../../page/home/home.component';
import { DetailComponent } from "../../page/detail/detail.component";
import { PayComponent } from "../../page/pay/pay.component";
import { loginComponent } from "../../page/login/login.component";
//guard
import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard] },
    { path: 'pay', component: PayComponent, canActivate: [AuthGuard] },
    { path: 'login', component: loginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
