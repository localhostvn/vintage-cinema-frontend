import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class movie {
    token;
    headers;
    domain = 'http://localhost/vingate%20cinema/back-end-vintage-cinema';

    constructor(private httpClient: HttpClient) {
         this.headers = new HttpHeaders({ token: ''+localStorage.getItem('currentUser') });
     }
    get_movie_all() {
        return this.httpClient.get(this.domain+'/public/api/movie/all', {headers:this.headers});
    }
    get_movie_nowshowing() {
        return this.httpClient.get(this.domain+'/public/api/movie/nowshowing', {headers:this.headers});
    }
    get_movie_commingsoon() {
        return this.httpClient.get(this.domain+'/public/api/movie/commingsoon', {headers:this.headers});
    }
    get_movie_where_id(id){
        return this.httpClient.get(this.domain+'/public/api/movie/id/'+id, {headers:this.headers});
    }
    get_date(){
        return this.httpClient.get(this.domain+'/public/api/movie/show/date', {headers:this.headers});
    }
    get_cinema(){
        return this.httpClient.get(this.domain+'/public/api/cinema', {headers:this.headers});
    }
    get_show(id_film,id_cinema,id_date){
        return this.httpClient.get(this.domain+'/public/api/show/'+id_film+'/'+id_cinema+'/'+id_date+'', {headers:this.headers});
    }
    get_row(id_show){
        return this.httpClient.get(this.domain+'/public/api/row/'+id_show, {headers:this.headers});
    }
    get_seat(id_show){
        return this.httpClient.get(this.domain+'/public/api/seat/'+id_show, {headers:this.headers});
    }
    get_pay(){
        return this.httpClient.post(this.domain+'/public/api/pay',{id:1,amount:100000}, {headers:this.headers});
    }
    add_phim(name,point,description,duration,country,category,date_start,status,img){
        return this.httpClient.post(this.domain+'/public/api/admin/movie',
        {name:name,point:point,description:description,duration:duration,country:country,category:category,
            date_start:date_start,status:status,img:img}, 
            {headers:this.headers});
    }
    update_phim(id_flim,name,point,description,duration,country,category,date_start,status,img){
        return this.httpClient.patch(this.domain+'/public/api/admin/movie/'+id_flim,
        {name:name,point:point,description:description,duration:duration,country:country,category:category,
            date_start:date_start,status:status,img:img}, 
            {headers:this.headers});
    }
    delete_phim(id_film){
        return this.httpClient.delete(this.domain+'/public/api/admin/movie/'+id_film, {headers:this.headers});
    }
    get_admin_show(id_film,id_cinema){
        return this.httpClient.post(this.domain+'/public/api/admin/show_film_cinema',
        {id_film:id_film,id_cinema:id_cinema}, 
        {headers:this.headers});
    }
    add_show(id_film,id_cinema,id_room,id_date,time){
        return this.httpClient.post(this.domain+'/public/api/admin/show',
        {id_film:id_film,id_cinema:id_cinema,id_room:id_room,id_date:id_date,time:time}, 
        {headers:this.headers});
    }
    get_show_where_id(id_show){
        return this.httpClient.get(this.domain+'/public/api/admin/show/'+id_show+'/edit', {headers:this.headers});
    }
    update_show(id_show,id_room,id_date,time){
        return this.httpClient.put(this.domain+'/public/api/admin/show/'+id_show,
        {id_room:id_room,id_date:id_date,time:time}, 
        {headers:this.headers});
    }
    delete_show(id_show){
        return this.httpClient.delete(this.domain+'/public/api/admin/show/'+id_show, {headers:this.headers});
    }
    get_room(id_cinema){
        return this.httpClient.get(this.domain+'/public/api/admin/room/'+id_cinema, {headers:this.headers});
    }

}
