import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import { SocialAuthService,FacebookLoginProvider,GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
    selector: 'page-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
    scroll;
    user:SocialUser;
    loggedIn:boolean;
    constructor(private authService:SocialAuthService,private router: Router,) { }
    sign_with_google(){
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.authService.authState.subscribe((res)=>{
        this.user = res;
        this.loggedIn = (res != null);
        localStorage.setItem('currentUser',JSON.stringify(this.user));
        this.router.navigate(['/']);
      })
    }
    sign_with_facebook(){
      this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      this.authService.authState.subscribe((res)=>{
        this.user = res;
        this.loggedIn = (res != null);
        localStorage.setItem('currentUser',JSON.stringify(this.user));
        this.router.navigate(['/']);
      })
    }
    sign_out(){

    }
    ngOnInit(): void {
      this.authService.authState.subscribe((res)=>{
        this.user = res;
        this.loggedIn = (res != null);
        console.log(this.user);
      })
     }
    ngAfterViewInit(): void {
        this.scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          direction: 'horizontal',
          smooth: true
        });
      }
}
