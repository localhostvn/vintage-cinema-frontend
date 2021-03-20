import { Component, OnInit, HostListener } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scroll;
  Datahorizontal: true;
  constructor() { }

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      direction: 'horizontal',
      smooth: true
    });
  }

}
