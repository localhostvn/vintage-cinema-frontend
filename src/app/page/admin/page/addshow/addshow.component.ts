import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import { movie } from "../../../../service/movie.service";

@Component({
    selector: 'admin-addshow',
    templateUrl: './addshow.component.html',
    styleUrls: ['./addshow.component.css']
})
export class AdminAddShowComponent implements OnInit {
    scroll;
    data_film;
    data_cinema;
    data_room;
    data_date;
    time = null
    constructor(private movie:movie) { }
    get_room(addfrom){
        this.movie.get_room(addfrom['id_cinema']).subscribe((res)=>{
            this.data_room = res;
        })
    }
    add_show(addfrom){
        this.movie.add_show(addfrom['id_film'],addfrom['id_cinema'],addfrom['id_room'],addfrom['id_date'],addfrom['time'])
        .subscribe((res)=>{
            this.time = null;
        })
    }
    ngOnInit(): void {
        this.movie.get_movie_all().subscribe((res)=>{
            this.data_film = res;
        })
        this.movie.get_cinema().subscribe((res)=>{
            this.data_cinema = res;
        })
        this.movie.get_date().subscribe((res)=>{
            this.data_date = res;
        })

        this.scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
          });
    }
}
