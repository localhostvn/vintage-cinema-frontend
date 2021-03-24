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
}
