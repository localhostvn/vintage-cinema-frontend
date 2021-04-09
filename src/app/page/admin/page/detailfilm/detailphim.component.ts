import { Component, OnInit } from '@angular/core';
import  LocomotiveScroll  from "locomotive-scroll";
import { ActivatedRoute } from '@angular/router';
import { movie } from "../../../../service/movie.service";
import { Film } from "../../../../model/film.model";

@Component({
  selector: 'app-detailphim',
  templateUrl: './detailphim.component.html',
  styleUrls: ['./detailphim.component.css']
})
export class DetailfilmComponent implements OnInit {
  scroll;
  id_film:any;
  date_film:any;

  name:string;
  description:string;
  duration:string;
  country:string;
  date_start:any;
  status:Number;
  img:string;
  constructor(private route: ActivatedRoute,private movie:movie) { }
  update_detail_film(x){
    console.log(x)
  }

  ngOnInit(): void {
    this.id_film = this.route.snapshot.paramMap.get('id');
    this.movie.get_movie_where_id(this.id_film).subscribe((res)=>{
      this.date_film = res;
    });
    
    

    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
    });
  }
}


