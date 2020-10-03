import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-expansio',
  templateUrl: './expansio.component.html',
  styleUrls: ['./expansio.component.scss']
})
export class ExpansioComponent implements OnInit {
  name = "Amir Salah Alahmedy";
  job = "Computer Engineer";

  constructor() { }

  ngOnInit(): void {
  }

}
