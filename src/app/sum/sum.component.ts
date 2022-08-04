import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {
  num1: number;
  num2: number;
  sumData: any;
  showSum = false;

  constructor() { }

  ngOnInit(): void {
  }

  sum() {
    if (this.num1 && this.num2) {
      this.sumData = [];
      this.sumData.push({ number: this.num1 })
      this.sumData.push({ number: this.num2 })
      this.showSum = true;
    }
  }

}
