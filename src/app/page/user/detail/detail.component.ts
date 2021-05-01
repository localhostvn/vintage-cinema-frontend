import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import LocomotiveScroll from 'locomotive-scroll';
import { movie } from "../../../service/movie.service";

@Component({
  selector: 'page-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  scroll: any;
  data_film_detail: any;
  price: Number = 95000;
  id_film: Number;
  id_cinema: Number;
  id_date: any;
  id_show: Number;
  id_seat: any = [];
  data_date: any;
  data_cinema: any;
  data_show: any;
  data_row: any;
  data_seat: any;
  data_booking: any = [];
  isloading:boolean = false;
  constructor(private movie: movie, private route: ActivatedRoute) {

  }

  choose_date(id) {


    this.isloading = true;
    this.movie.get_cinema().subscribe((res) => {
      this.data_cinema = res;
      console.log(id)
      console.log(this.id_film)
      this.id_date = id;
      this.isloading = false;
    });
  }
  choose_cinema(event) {
    this.isloading = true;
    this.id_cinema = parseInt(event);
    this.movie.get_show(this.id_film, this.id_cinema, this.id_date).subscribe((res) => {
      this.data_show = res;
      this.isloading = false;
      console.log(this.data_show);
    });
  }
  choose_show(event) {
    this.isloading = true;
    this.id_show = parseInt(event);
    this.movie.get_row(this.id_show).subscribe((res) => {
      this.data_row = res;
    });
    this.movie.get_seat(this.id_show).subscribe((res) => {
      this.data_seat = res;
    });
    // this.movie.get_show_where_id(event).subscribe((res)=>{
    //   console.log(res);
    //   this.isloading = false;
    // })
    this.isloading = false;
    console.log(event);
  }

  choose_seat(event) {
   
   
    this.creat_booking(event);
    console.log(this.data_booking);
  }
  creat_booking(event) {
   
    
    let add = true;
    for (let index = 0; index < this.data_booking.length; index++) {
      if(this.data_booking[index]['id_seat'] == event[0]){
          this.data_booking.splice(this.data_booking.indexOf(index),1);
          add = false;
          break;
      }
    }
    if(add == true){
      this.data_booking.push({
        'id_film': this.id_film,
        'name':this.data_film_detail[0]['name'],
        'id_cinema': this.id_cinema,
        'id_date': this.id_date,
        'id_show': this.id_show,
        'id_seat': event[0],
        'name_seat': event[1],
        'name_row': event[2],
        'price': this.price,
      });
    }


   
    localStorage.setItem('info_booking',JSON.stringify(this.data_booking))
    
  }

  ngOnInit(): void {
    


    this.id_film = parseInt(this.route.snapshot.paramMap.get('id'));
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

