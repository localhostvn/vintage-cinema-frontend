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
//admin
import { DashboardComponent } from "./page/admin/page/film/dashboard.component";
import { DetailfilmComponent } from "./page/admin/page/detailfilm/detailphim.component";
import {AddphimComponent} from "./page/admin/page/addfilm/addphim.component";
import { MenuAdminComponent } from "./page/admin/block/menu/MenuAdmin.component";
import { AdminCinemaComponent } from "./page/admin/page/cinema/cinema.component";
import { AdminShowComponent } from "./page/admin/page/show/show.component";
import { AdminAddShowComponent } from "./page/admin/page/addshow/addshow.component";
import { UpdateShowComponent } from "./page/admin/page/updateshow/updateshow.component";

//model
import { HttpClientModule } from "@angular/common/http";
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { FormsModule } from '@angular/forms';

//gruade
import { AuthGuard } from "./guards/auth.guard";

//service
import { movie } from "./service/movie.service";
import { loginService } from "./service/login.service";


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
   //admin
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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule
  ],
  providers: [movie,
    loginService,
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
