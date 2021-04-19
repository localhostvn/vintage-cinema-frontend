import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import { movie } from "../../service/movie.service";
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  scroll;
  info_user:any;
  constructor(private movie:movie) { }
  btn_pay(){
    //  location.replace('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/pay?id=11');
    this.movie.get_pay().subscribe((res:any)=>{
      console.log(res);
      location.replace(res);
    });
   
  }
  ngOnInit(): void {
    this.info_user = JSON.parse(localStorage.getItem('currentUser'));
    
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      direction: 'vertical',
      smooth: true
    });
  }

}
