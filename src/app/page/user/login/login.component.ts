import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import { SocialUser } from "angularx-social-login";
import { loginService } from "../../../service/login.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  scroll;
  user: SocialUser;
  loggedIn: boolean;
  constructor(private login: loginService, private router: Router, private ActivatedRoute: ActivatedRoute) { }
  set_login(res) {

    this.user = res;
    this.loggedIn = (res != null);
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    this.login.login_signup(this.user.authToken).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
  sign_with_google() {
    // this.login.sign_with_google().subscribe((res)=>{
    //   this.set_login(res);
    // });

    this.login.sign_with_google().subscribe((res) => {
      console.log(res['url'])
      location.replace(res['url']);

    });
  }
  sign_with_facebook() {
    this.login.sign_with_facebook().subscribe((res) => {
      this.set_login(res);
    });
  }
  sign_out() {

  }
  ngOnInit(): void {
    

    
    if (this.ActivatedRoute.snapshot.queryParams['code'] != undefined) {
      this.login.call_back_login(this.ActivatedRoute.snapshot.queryParams['code'],
        this.ActivatedRoute.snapshot.queryParams['scope'],
        this.ActivatedRoute.snapshot.queryParams['authuser'],
        this.ActivatedRoute.snapshot.queryParams['prompt']).subscribe((res) => {
          localStorage.setItem('currentUser', JSON.stringify(res));
          location.replace('/');
        })
    }else{
      console.log(1)
    } 

  }
  ngAfterViewInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      direction: 'horizontal',
      smooth: true
    });
  }
}
