import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './page/detail/detail.component';
import { HomeComponent } from './page/home/home.component';
import { PayComponent } from './page/pay/pay.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'pay', component: PayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

