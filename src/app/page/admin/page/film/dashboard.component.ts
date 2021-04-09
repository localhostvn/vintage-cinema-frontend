import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { movie } from "../../../../service/movie.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  scroll;
  data_nowshowing:any;
  data_commingsoon:any;
  constructor(private movie:movie) { }

  ngOnInit(): void {
    this.movie.get_movie_nowshowing().subscribe((res)=>{
      this.data_nowshowing = res;
    })
    this.movie.get_movie_commingsoon().subscribe((res)=>{
      this.data_commingsoon = res;
    })

    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
     
    });
  }

}
