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
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  mHTTP;
  images = [];

  constructor(private http: HttpClient) {
    this.mHTTP = http;
    http.get('https://api.github.com/users')
      .subscribe({
        next: (data) => {
          if(Array.isArray(data)){
            data.slice(0, this.pageSize).forEach(element => {
              this.items.push(element.login );
            });
          }
        },
        error: err => console.log(err),
        complete: () => console.log('Completed!')
      });
  }

  ngOnInit(): void {
  }

  onPaginateChange(event){
    this.mHTTP.get('https://api.github.com/users')
    .subscribe({
      next: (data) => {
        this.items = [];
        if(event.pageIndex != 0 && Array.isArray(data)){
          data?.slice(event.pageIndex*this.pageSize, event.pageIndex*this.pageSize + this.pageSize).forEach(element => {
            this.items.push(element.login);
          });
        }
        },
        error: err => console.log(err),
        complete: () => console.log('Completed!')
      })
  }

  onSubmit(event) {
    // TODO: Use EventEmitter with form value
    console.log(event);
  }

}
