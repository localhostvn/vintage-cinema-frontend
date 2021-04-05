import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import {SocialUser } from "angularx-social-login";
import { loginService } from "../../service/login.service";
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
    constructor(private login:loginService,private router: Router,) { }
    set_login(res){
        this.user = res;
        this.loggedIn = (res != null);
        localStorage.setItem('currentUser',JSON.stringify(this.user));
        this.router.navigate(['/']);
    }
    sign_with_google(){
      this.login.sign_with_google().subscribe((res)=>{
        this.set_login(res);
      });
    }
    sign_with_facebook(){
      this.login.sign_with_facebook().subscribe((res)=>{
        this.set_login(res);
      });
    }
    sign_out(){

    }
    ngOnInit(): void {
      // this.login.auth_state().subscribe((res)=>{
      //   this.user = res;
      //   this.loggedIn = (res != null);
      //   console.log(this.user);
      // });
     }
    ngAfterViewInit(): void {
        this.scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          direction: 'horizontal',
          smooth: true
        });
      }
}
