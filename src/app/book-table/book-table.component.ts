import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  @Input() bookList: Array<string> = [];
  @Input() buttonShow = false;

  @Output() bookSelectedEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bookSelected(selected: string) {
    this.bookSelectedEventEmitter.emit(selected);
  }

}
