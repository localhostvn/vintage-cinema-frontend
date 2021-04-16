import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import { movie } from "../../../../service/movie.service";

@Component({
    selector: 'admin-cinema',
    templateUrl: './cinema.component.html',
    styleUrls: ['./cinema.component.css']
})
export class AdminCinemaComponent implements OnInit {
    scroll;
    data_cinema: any;
    constructor(private movie: movie) { }

    ngOnInit(): void {
        this.movie.get_cinema().subscribe((res)=>{
            this.data_cinema = res;
        });

        this.scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),

        });
    }
}
