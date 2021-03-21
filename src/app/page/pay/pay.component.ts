import { Component, OnInit } from '@angular/core';
import LocomotiveScroll from "locomotive-scroll";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  scroll;
  constructor() { }

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      direction: 'vertical',
      smooth: true
    });
  }

}
