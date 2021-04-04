import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class movie {

    constructor(private httpClient: HttpClient) { }
    get_movie_all() {
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/all');
    }
    get_movie_nowshowing() {
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/nowshowing');
    }
    get_movie_commingsoon() {
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/commingsoon');
    }
    get_movie_where_id(id){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/id/'+id);
    }
    get_date(){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/show/date');
    }
    get_cinema(){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/cinema');
    }
    get_show(id_film,id_cinema,id_date){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/show/'+id_film+'/'+id_cinema+'/'+id_date+'');
    }
    get_row(id_show){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/row/'+id_show);
    }
    get_seat(id_show){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/seat/'+id_show);
    }
    get_pay(){
        return this.httpClient.post('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/pay',{id:1,amount:100000});
    }
}
