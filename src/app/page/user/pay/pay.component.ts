import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import { movie } from "../../../service/movie.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  scroll;
  info_user: any;
  data_booking: any;
  all_price: Number = 0;
  // bill:any = [];
  constructor(private movie: movie,private router:ActivatedRoute) { }
  btn_pay() {
    //  location.replace('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/pay?id=11');
    this.movie.get_pay(this.all_price).subscribe((res: any) => {
      console.log(res);
      location.replace(res);
    });

  }
  ngOnInit(): void {
   
    // if(this.router.snapshot.queryParams['vnp_ResponseCode']=='00'){
    //   this.bill['info'] = {
    //     'id_ticket':this.router.snapshot.queryParams['vnp_BankTranNo'],
    //   }
    //   this.bill['list_ticket'] = JSON.parse(localStorage.getItem('info_booking'))
    // }
    // console.log(this.bill)

    this.info_user = JSON.parse(localStorage.getItem('currentUser'));
    this.data_booking = JSON.parse(localStorage.getItem('info_booking'));

    for (let index = 0; index < this.data_booking.length; index++) {
      this.all_price = this.all_price + this.data_booking[index]['price'];
    }
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      direction: 'vertical',
      smooth: true
    });
  }

}
