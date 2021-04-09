import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import {movie} from "../../../../service/movie.service";

@Component({
  selector: 'app-addphim',
  templateUrl: './addphim.component.html',
  styleUrls: ['./addphim.component.css']
})
export class AddphimComponent implements OnInit {
  scroll
  constructor(private movie:movie) { }
  add_film(x){
    this.movie.add_phim(x['name'],x['point'],x['description'],x['duration'],x['country'],x['category'],x['date_start'],x['status'],x['img'])
    .subscribe((res)=>{
      console.log(res)
    });
    
   

  }

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
    });
  }

}
