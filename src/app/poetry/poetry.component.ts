import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-poetry',
  templateUrl: './poetry.component.html',
  styleUrls: ['./poetry.component.scss']
})
export class PoetryComponent implements OnInit {
  title;
  author;
  lines;
  constructor(private http: HttpClient) {
    http.get('https://poetrydb.org/author,title/Shakespeare;Sonnet')
      .subscribe({
        next: (data)=>{
          this.title = data[0].title;
          this.author = data[0].author;
          this.lines = data[0].lines;
        },
        error: (err)=>console.log(err)
      });
  }

  ngOnInit(): void {
  }

}
