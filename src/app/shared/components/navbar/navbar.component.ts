import { Component, OnInit } from '@angular/core';

interface menuItem{
  text: string;
  icon?: string;
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
    {text: 'Usuarios', icon: 'fas fa-users', route: '/'},
    {text: 'Posts', icon:'fas fa-clipboard', route: '/posts'},
    {text: 'Albums', icon: 'fas fa-images', route: '/albums'},
    {text: 'Todos', icon: 'fas fa-tasks', route:'/todos'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
