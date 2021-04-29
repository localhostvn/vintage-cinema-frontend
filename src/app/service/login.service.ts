import { Injectable } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class loginService {
    constructor(private authService: SocialAuthService,private HttpClient:HttpClient) { }
    sign_with_google() {
        // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        // return this.auth_state();

        return this.HttpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/auth/google/url');
    }
    sign_with_facebook() {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        return this.auth_state();
    }
    auth_state() {
        return this.authService.authState;
    }
    sign_out() {

    }
    login_signup(token){
        return this.HttpClient.post('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/login',{token:token});
    }
    call_back_login(code,scope,authuser,prompt){
        return this.HttpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/auth/google/callback?code='+code+
        '&scope='+scope+'&authuser='+authuser+'&prompt='+prompt
        );
    }
}