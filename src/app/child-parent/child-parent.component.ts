import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent implements OnInit {

  myFavoriteBooks = [ 'The Art of Computer Programming', 
  'Close to the Machine', 
  'The Java Programming Language',
  "The Art of Unix Programming" ];

  
  constructor() { }

  ngOnInit(): void {
  }

  selectedBookToWatch(data: string) {
    alert(data);
  }

}
