import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class movie {

    constructor(private httpClient: HttpClient) { }
    get_movie_all() {
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/all', { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
    get_movie_nowshowing() {
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/nowshowing', { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
    get_movie_commingsoon() {
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/commingsoon', { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
    get_movie_where_id(id){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/id/'+id, { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
    get_date(){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/movie/show/date', { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
    get_cinema(){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/cinema', { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
    get_show(id_film,id_cinema,id_date){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/show/'+id_film+'/'+id_cinema+'/'+id_date+'', { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
    get_row(id_show){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/row/'+id_show, { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
    get_seat(id_show){
        return this.httpClient.get('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/seat/'+id_show, { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
    get_pay(){
        return this.httpClient.post('http://localhost/vingate%20cinema/back-end-vintage-cinema/public/api/pay',{id:1,amount:100000}, { headers: new HttpHeaders({ token: ''+localStorage.getItem('currentUser') })});
    }
}
