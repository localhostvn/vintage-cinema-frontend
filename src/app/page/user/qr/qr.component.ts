import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { movie } from "../../../service/movie.service";

@Component({
    selector: 'page-qr',
    templateUrl: './qr.component.html',
    styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
    bill: any = [];
    info_booking: any = [];
    id_user;
    qr_code:any;
    constructor(private route: ActivatedRoute, private movie: movie) { }

    ngOnInit(): void {
        this.info_booking = JSON.parse(localStorage.getItem('info_booking'))
        this.id_user = JSON.parse(localStorage.getItem('currentUser'))
        this.qr_code = this.route.snapshot.queryParams['vnp_BankTranNo'];

        if (this.info_booking != null) {
            for (let index = 0; index < this.info_booking.length; index++) {
                if (this.route.snapshot.queryParams['vnp_ResponseCode'] == '00') {
                    this.movie.pay_return(this.info_booking[index]['id_cinema'],
                        this.info_booking[index]['id_film'],
                        this.info_booking[index]['id_seat'],
                        this.id_user['id_user'],
                        this.route.snapshot.queryParams['vnp_BankTranNo'],
                        this.info_booking[index]['id_show']).subscribe((res) => {

                        });
                    console.log(this.bill)
                }
            }
        }else{
            location.replace('/');
        }
        


        localStorage.removeItem('info_booking');

    }
}
