import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from "./admin-routing.module";
//component
import { DashboardComponent } from "../../page/admin/page/film/dashboard.component";
import { DetailfilmComponent } from "../../page/admin/page/detailfilm/detailphim.component";
import { AddphimComponent } from "../../page/admin/page/addfilm/addphim.component";
import { MenuAdminComponent } from "../../page/admin/block/menu/MenuAdmin.component";
import { AdminCinemaComponent } from "../../page/admin/page/cinema/cinema.component";
import { AdminShowComponent } from "../../page/admin/page/show/show.component";
import { AdminAddShowComponent } from "../../page/admin/page/addshow/addshow.component";
import { UpdateShowComponent } from "../../page/admin/page/updateshow/updateshow.component";
//module
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DashboardComponent,
        DetailfilmComponent,
        AddphimComponent,
        MenuAdminComponent,
        AdminCinemaComponent,
        AdminShowComponent,
        AdminAddShowComponent,
        UpdateShowComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [],
})
export class AdminModule { }