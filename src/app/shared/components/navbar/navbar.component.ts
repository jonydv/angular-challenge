import { Component, OnInit } from '@angular/core';

interface menuItem{
  text: string;
  route: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  menuItems: menuItem[] = [
    {text: 'Usuarios', route: '/'},
    {text: 'Posts', route: '/posts'},
    {text: 'Albums', route: '/albums'},
    {text: 'Todos', route:'/todos'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
