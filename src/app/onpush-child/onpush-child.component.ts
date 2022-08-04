import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush-child',
  templateUrl: './onpush-child.component.html',
  styleUrls: ['./onpush-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  executeFunction() {
    console.log("App Rerendered")
    return "This is Child Component"
  }

}
