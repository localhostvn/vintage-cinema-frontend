import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from "./user-routing.module";
//component

import { BookComponent } from '../../block/book/book.component';
import { ShapeComponent } from '../../block/shape/shape.component';
import { FooterComponent } from '../../block/footer/footer.component';
import { HomeComponent } from '../../page/user/home/home.component';
import { PayComponent } from '../../page/user/pay/pay.component';
import { DetailComponent } from '../../page/user/detail/detail.component';
import { loginComponent } from "../../page/user/login/login.component";
import { QrComponent } from "../../page/user/qr/qr.component";

@NgModule({
    declarations: [
        HomeComponent,
        PayComponent,
        DetailComponent,
        loginComponent,
        BookComponent,
        ShapeComponent,
        FooterComponent,
        QrComponent
    ],
    imports: [ CommonModule ,UserRoutingModule],
    exports: [],
    providers: [],
})
export class UserModule {}