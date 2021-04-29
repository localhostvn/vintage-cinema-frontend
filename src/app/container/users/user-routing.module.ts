import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//user component
import { HomeComponent } from '../../page/user/home/home.component';
import { DetailComponent } from "../../page/user/detail/detail.component";
import { PayComponent } from "../../page//user/pay/pay.component";
import { loginComponent } from "../../page/user/login/login.component";
import { QrComponent } from "../../page/user/qr/qr.component";
//guard
import { AuthGuard } from "../../guards/auth.guard";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard] },
    { path: 'pay', component: PayComponent, canActivate: [AuthGuard] },
    { path: 'qr', component: QrComponent, canActivate: [AuthGuard] },
    { path: 'login', component: loginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
