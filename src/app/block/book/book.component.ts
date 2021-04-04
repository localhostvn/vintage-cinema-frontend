import { Component, OnInit } from '@angular/core';
import { movie } from "../../service/movie.service";

@Component({
  selector: 'block-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  data_date: any;
  data_nowshowing: any;
  data_cinema: any;
  data_show:any;
  id_date: any;
  id_film: any = 0;
  id_cinema: any;
  constructor(private movie: movie) { }

  choose_film(event){
    this.id_film = event;
  }
  choose_cinema(event){
    this.id_cinema = event;
  }
  choose_date(event){
    this.id_date = event;
    console.log(this.id_film)
    console.log(this.id_cinema)
     console.log(this.id_date)
    this.movie.get_show(this.id_film,this.id_cinema,this.id_date).subscribe((res)=>{
      this.data_show = res;
      console.log(this.data_show)
    })
  }

  ngOnInit(): void {
    this.movie.get_movie_nowshowing().subscribe((res) => {
      this.data_nowshowing = res;
    })
    this.movie.get_cinema().subscribe((res) => {
      this.data_cinema = res;
    });
    this.movie.get_date().subscribe((res) => {
      this.data_date = res;
      for (let index = 0; index < this.data_date.length; index++) {
        const get_day = new Date(this.data_date[index]['date']);
        this.data_date[index]['date'] = get_day.toLocaleDateString();
        if (get_day.getDay() == 0) {
          this.data_date[index]['day'] = "CN";
        } else {
          this.data_date[index]['day'] = "T." + "" + (get_day.getDay() + 1) + "";
        }
      }
      console.log(this.data_date);
    });
  }

}
