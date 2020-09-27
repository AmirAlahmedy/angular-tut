import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  numbersForm = new FormGroup({
    number: new FormControl('5')
  });
  http;
  constructor(private http:HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    let value = document.querySelector('input').value;
    this.http.get("http://numbersapi.com/"+value+"/math")
      .subscribe({
        next: (data) =>{
          document.querySelector('#fact').textContent = data.text;
        },
        error: err => {
          console.log(err.error.text);
          document.getElementById('fact').style.visibility = "visible";
          document.querySelector('#fact').textContent = err.error.text;
        }
      })
  }

}
