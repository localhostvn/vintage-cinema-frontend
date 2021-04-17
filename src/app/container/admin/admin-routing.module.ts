import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//component
import { DashboardComponent } from '../../page/admin/page/film/dashboard.component';
import { AddphimComponent } from '../../page/admin/page/addfilm/addphim.component';
import { AdminCinemaComponent } from '../../page/admin/page/cinema/cinema.component';
import { AdminShowComponent } from '../../page/admin/page/show/show.component';
import { AdminAddShowComponent } from '../../page/admin/page/addshow/addshow.component';
import { UpdateShowComponent } from '../../page/admin/page/updateshow/updateshow.component';
import { DetailfilmComponent } from "../../page/admin/page/detailfilm/detailphim.component";
//guard
import { AuthGuard } from "../../guards/auth.guard";


const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'film', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'film/add', component: AddphimComponent, canActivate: [AuthGuard] },
  { path: 'film/:id', component: DetailfilmComponent, canActivate: [AuthGuard] },
  { path: 'cinema', component: AdminCinemaComponent, canActivate: [AuthGuard] },
  { path: 'show', component: AdminShowComponent, canActivate: [AuthGuard] },
  { path: 'show/add', component: AdminAddShowComponent, canActivate: [AuthGuard] },
  { path: 'show/update/:id', component: UpdateShowComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
