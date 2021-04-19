import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuAdminComponent } from "./page/admin/block/menu/MenuAdmin.component";
import { MenuComponent } from "./block/menu/menu.component";
//container
import { ContainerUserComponent } from "./container/users/user.component";
import { ContainerAdminComponent } from "./container/admin/admin.component";
//model
import { HttpClientModule } from "@angular/common/http";
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
//gruade
import { AuthGuard } from "./guards/auth.guard";
//service
import { movie } from "./service/movie.service";
import { loginService } from "./service/login.service";

@NgModule({
  declarations: [
    AppComponent,MenuAdminComponent,MenuComponent,
    //user
    ContainerUserComponent,
    //admin
    ContainerAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,

  ],
  providers: [
    movie,
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
