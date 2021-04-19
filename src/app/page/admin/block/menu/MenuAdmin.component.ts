import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu-admin',
    templateUrl: './MenuAdmin.component.html',
    styleUrls: ['./MenuAdmin.component.css']
})
export class MenuAdminComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
        var menu_parent = document.querySelectorAll('ul li');
        for (let index = 0; index < menu_parent.length; index++) {
            menu_parent[index].addEventListener('click', function () {
                if(document.querySelector('.side-menu--active') != null){
                    document.querySelector('.side-menu--active').classList.remove('side-menu--active')
                }
                if(document.querySelector('.side-menu__sub-open') != null){
                    document.querySelector('.side-menu__sub-open').classList.remove('side-menu__sub-open')
                }
                
                menu_parent[index].children[1].classList.add('side-menu__sub-open')
                menu_parent[index].children[0].classList.add('side-menu--active')
            });
        }


    }
}
