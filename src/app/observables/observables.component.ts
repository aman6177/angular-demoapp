import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  bookItems: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.getData().subscribe((data) => {
      this.bookItems = data;
    })
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/posts')
  }

}
