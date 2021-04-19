import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from "./user-routing.module";
//component

import { BookComponent } from '../../block/book/book.component';
import { ShapeComponent } from '../../block/shape/shape.component';
import { FooterComponent } from '../../block/footer/footer.component';
import { HomeComponent } from '../../page/home/home.component';
import { PayComponent } from '../../page/pay/pay.component';
import { DetailComponent } from '../../page/detail/detail.component';
import { loginComponent } from "../../page/login/login.component";

@NgModule({
    declarations: [
        HomeComponent,
        PayComponent,
        DetailComponent,
        loginComponent,
       
        BookComponent,
        ShapeComponent,
        FooterComponent
    ],
    imports: [ CommonModule ,UserRoutingModule],
    exports: [],
    providers: [],
})
export class UserModule {}