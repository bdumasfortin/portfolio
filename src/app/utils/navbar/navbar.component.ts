import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent 
{
  linkedInUrl: string = 'https://linkedin.com/in/bryanfortin/';
  gitHubUrl: string = 'https://github.com/bdumasfortin';

  constructor() { }
}
