import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;
  
  radius: number;
  color: string;
  constructor() { }

  ngOnInit(): void {
  }

}
