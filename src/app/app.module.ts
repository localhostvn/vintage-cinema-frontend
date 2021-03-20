import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { MenuComponent } from './block/menu/menu.component';
import { BookComponent } from './block/book/book.component';
import { ShapeComponent } from './block/shape/shape.component';
import { FooterComponent } from './block/footer/footer.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './page/home/home.component';
import { PayComponent } from './page/pay/pay.component';
import { DetailComponent } from './page/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    MenuComponent,
    BookComponent,
    ShapeComponent,
    FooterComponent,
    PageComponent,
    HomeComponent,
    PayComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
