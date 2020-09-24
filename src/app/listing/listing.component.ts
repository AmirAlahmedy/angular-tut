import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  items = [];
  constructor(private http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          data.forEach(element => {
            this.items.push(element.name );
          });
        },
        error: err => console.log(err),
        complete: () => console.log('Completed!')
      })
  }

  ngOnInit(): void {
  }

}
