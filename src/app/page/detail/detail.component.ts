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
  data_film_detail: any;
  price:Number = 95000;
  id_film: any;
  id_cinema: any;
  id_date: any;
  id_show: any;
  id_seat: any = [];
  data_date: any;
  data_cinema: any;
  data_show: any;
  data_row: any;
  data_seat: any;
  constructor(private movie: movie, private route: ActivatedRoute) {

  }
  choose_date(id) {
    this.movie.get_cinema().subscribe((res) => {
      this.data_cinema = res;
      this.id_date = id;
    });
  }
  choose_cinema(event) {
    this.id_cinema = event;
    this.movie.get_show(this.id_film, this.id_cinema, this.id_date).subscribe((res) => {
      this.data_show = res;
      console.log(this.data_show);
    });
  }
  choose_show(event) {
    this.id_show = event;
    this.movie.get_row(this.id_show).subscribe((res) => {
      this.data_row = res;
    });
    this.movie.get_seat(this.id_show).subscribe((res) => {
      this.data_seat = res;
    });
    console.log(this.data_seat);
  }
  
  choose_seat(event) {
    let add = true;
    for (let index = 0; index < this.id_seat.length; index++) {
      if(this.id_seat[index][0]==event[0]){
        this.id_seat.splice(this.id_seat.indexOf(index), 1);
        add = false;
        break;
      }
    }
    if(add == true){
      this.id_seat.push(event);
    }
    // if (this.id_seat.indexOf(event) != -1) {
    //   this.id_seat.splice(this.id_seat.indexOf(event), 1);
    // } else {
    //   this.id_seat.push(event);
    // }
    // console.log("id_film - " + this.id_film);
    // console.log("id_cinema - " + this.id_cinema);
    // console.log("id_date - " + this.id_date);
    // console.log("id_show - " + this.id_show);
    // console.log("id_seat - " + this.id_seat);
    console.log(this.id_seat);
  }
  ngOnInit(): void {

    this.id_film = this.route.snapshot.paramMap.get('id');
    this.movie.get_movie_where_id(this.id_film).subscribe((res) => {
      this.data_film_detail = res;
      console.log(this.data_film_detail);
    });


    this.movie.get_date().subscribe((res) => {
      this.data_date = res;
      for (let index = 0; index < this.data_date.length; index++) {
        const get_day = new Date(this.data_date[index]['date']);
        this.data_date[index]['date'] = get_day.getDate();
        if (get_day.getDay() == 0) {
          this.data_date[index]['day'] = "CN";
        } else {
          this.data_date[index]['day'] = "T." + "" + (get_day.getDay() + 1) + "";
        }
      }
      console.log(this.data_date);
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

