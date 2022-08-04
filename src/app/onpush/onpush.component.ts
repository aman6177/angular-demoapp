import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.css']
})
export class OnpushComponent implements OnInit {
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }



  updateCounter() {
      this.counter += 1;
  }


}
