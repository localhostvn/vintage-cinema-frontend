import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import LocomotiveScroll from 'locomotive-scroll';
import { movie } from "../../service/movie.service";

@Component({
  selector: 'page-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  scroll: any;
  data: any;
  id: any;
  constructor(private movie: movie, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movie.get_movie_where_id(this.id).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
  ngAfterViewInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      direction: 'vertical',
      smooth: true
    });
  }




}

