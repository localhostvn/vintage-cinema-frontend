import { Component, OnInit, HostListener } from '@angular/core';
import { Data } from '@angular/router';
import LocomotiveScroll from 'locomotive-scroll';
import { movie } from "../../service/movie.service";

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scroll;
  data_nowshowing: any;
  data_commingsoon: any;

  constructor(private movie: movie) {

  }



  ngOnInit(): void {
    this.movie.get_movie_nowshowing().subscribe((data) => {
      this.data_nowshowing = data;
    });
    this.movie.get_movie_commingsoon().subscribe((data) => {
      this.data_commingsoon = data;
    });
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      direction: 'horizontal',
      smooth: true,
      reloadOnContextChange:true,
    });
    console.log('ngOnInit')
  }

  ngDoCheck() {
    // console.log('docheck')
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit')
    
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      // console.log('ngAfterViewInit')
      this.scroll.update()
    }, 500);
  }
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked')
  }






}
