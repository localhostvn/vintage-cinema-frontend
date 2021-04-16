import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import { movie } from "../../../../service/movie.service";

@Component({
    selector: 'admin-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class AdminShowComponent implements OnInit {
    scroll;
    data_show;
    data_film;
    data_cinema;
    id_film = 0;
    id_cinema = 0;
    constructor(private movie:movie) { }

    get_show(){
        this.movie.get_admin_show(this.id_film,this.id_cinema).subscribe((res)=>{
            this.data_show = res;
        });
    }

    delete_show(id_show){
        this.movie.delete_show(id_show).subscribe((res)=>{
            this.get_show();
        });
    }

    ngOnInit(): void { 
        this.movie.get_movie_all().subscribe((res)=>{
            this.data_film = res;
        });
        this.movie.get_cinema().subscribe((res)=>{
            this.data_cinema = res;
        });

        this.scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
        });
    }
}
