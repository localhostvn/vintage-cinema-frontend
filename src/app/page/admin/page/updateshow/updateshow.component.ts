import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";
import { ActivatedRoute,Router } from "@angular/router";
import { movie } from "../../../../service/movie.service";

@Component({
    selector: 'admin-updateshow',
    templateUrl: './updateshow.component.html',
    styleUrls: ['./updateshow.component.css']
})
export class UpdateShowComponent implements OnInit {
    scroll;
    id_show;
    data_show;
    data_room;
    data_date;
    id_room;
    id_date;
    time;
    constructor(private route:ActivatedRoute,private Router:Router,private movie:movie) { }

    update_show(updateForm){
        this.movie.update_show(this.id_show,updateForm['id_room'],updateForm['id_date'],updateForm['time']).subscribe((res)=>{
            this.Router.navigate(['admin/show']);
        })
    }

    ngOnInit(): void { 
        this.id_show = this.route.snapshot.paramMap.get('id');

        this.movie.get_show_where_id(this.id_show).subscribe((res)=>{
            this.data_show = res;
            this.id_room = this.data_show[0]['id_room'];
            this.id_date = this.data_show[0]['id_date'];
            this.time = this.data_show[0]['time'];
            this.movie.get_room(this.data_show[0]['id_cinema']).subscribe((res_room)=>{
                this.data_room = res_room;
            });
        });
        this.movie.get_date().subscribe((res)=>{
            this.data_date = res;
        });

        this.scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
        });
    }
}
