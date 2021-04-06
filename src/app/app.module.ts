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
import { loginComponent } from "./page/login/login.component";
//model
import { HttpClientModule } from "@angular/common/http";
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

//gruade
import { AuthGuard } from "./guards/auth.guard";

//service
import { movie } from "./service/movie.service";
import { AddphimComponent } from './page/admin/page/addphim/addphim.component';
import { DetailphimComponent } from './page/admin/page/detailphim/detailphim.component';
import { ListphimComponent } from './page/admin/page/listphim/listphim.component';
import { SuatchieuComponent } from './page/admin/page/suatchieu/suatchieu.component';
import { DashboardComponent } from './page/admin/page/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookComponent,
    ShapeComponent,
    FooterComponent,
    HomeComponent,
    PayComponent,
    DetailComponent,
    loginComponent,
    AddphimComponent,
    DetailphimComponent,
    ListphimComponent,
    SuatchieuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [movie,
    AuthGuard,
     {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '529400434677-699tmffb8eo3egbqtrb2auem7gaueef7.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('3790038164399402')
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
