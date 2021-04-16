import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from "../../../../service/movie.service";
import { Film } from "../../../../model/film.model";

@Component({
  selector: 'app-detailphim',
  templateUrl: './detailphim.component.html',
  styleUrls: ['./detailphim.component.css']
})
export class DetailfilmComponent implements OnInit {
  scroll;
  id_film: any;
  date_film: any;

  constructor(private route: ActivatedRoute, private router: Router, private movie: movie) { }
  update_detail_film(x) {
    this.movie.update_phim(this.id_film, x['name'], x['point'], x['description']
      , x['duration'], x['country']
      , x['category'], x['date_start']
      , x['status'], x['img'])
      .subscribe((res) => {
        console.log(res)
        
        this.router.navigate(['admin/film']);
      });
  }

  ngOnInit(): void {
    this.id_film = this.route.snapshot.paramMap.get('id');
    this.movie.get_movie_where_id(this.id_film).subscribe((res) => {
      this.date_film = res;
    });



    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
    });
  }
}


