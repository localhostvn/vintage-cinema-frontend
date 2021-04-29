import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class admin_AuthGuard implements CanActivate {
    user;
    constructor(private router: Router) { }
 
    canActivate() {
        
        if (localStorage.getItem('currentUser')) {
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            if(this.user['role']==2){
                return true;
            }
            this.router.navigate(['/']);
            return true;
        }
        this.router.navigate(['login']);
        return true;
    }
   
    
}