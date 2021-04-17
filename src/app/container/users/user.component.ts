import { Component, OnInit } from '@angular/core';
import  LocomotiveScroll from "locomotive-scroll";

@Component({
    selector: 'container-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class ContainerUserComponent implements OnInit {
    scroll;
    constructor() { }

    ngOnInit(): void {
        this.scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
          });
     }
}
