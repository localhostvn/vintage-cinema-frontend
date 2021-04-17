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
  delete_flim(id_film){
    this.movie.delete_phim(id_film).subscribe((res)=>{
      this.show_flim();
    });
  }
  show_flim(){
    this.movie.get_movie_nowshowing().subscribe((res)=>{
      this.data_nowshowing = res;
    })
    this.movie.get_movie_commingsoon().subscribe((res)=>{
      this.data_commingsoon = res;
    })
  }
  ngOnInit(): void {
    this.show_flim();
    
    // this.scroll = new LocomotiveScroll({
    //   el: document.querySelector('[data-scroll-container]'),
     
    // });
  }

}
