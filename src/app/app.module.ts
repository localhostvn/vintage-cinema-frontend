import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './block/menu/menu.component';
import { BookComponent } from './block/book/book.component';
import { ShapeComponent } from './block/shape/shape.component';
import { FooterComponent } from './block/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { PayComponent } from './page/pay/pay.component';
import { DetailComponent } from './page/detail/detail.component';
//model
import { HttpClientModule } from "@angular/common/http";

//service
import { movie } from "./service/movie.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookComponent,
    ShapeComponent,
    FooterComponent,
    HomeComponent,
    PayComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [movie],
  bootstrap: [AppComponent]
})
export class AppModule { }
