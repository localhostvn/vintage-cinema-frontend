import { Injectable } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Injectable({
    providedIn: 'root'
})
export class loginService {
    constructor(private authService: SocialAuthService) { }
    sign_with_google() {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        console.log(this.authService.signIn(GoogleLoginProvider.PROVIDER_ID))
        return this.auth_state();
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
}