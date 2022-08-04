import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {


  myFavoriteBooks = [ 'The Art of Computer Programming', 
  'Close to the Machine', 
  'The Java Programming Language',
  "The Art of Unix Programming" ];

  constructor() { }

  ngOnInit(): void {
  }

}
