import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() recived: string;
  @Output() sender = new EventEmitter();
  valueToSend: string;
  constructor() { }

  ngOnInit() {
    console.log("this data From Parent - ", this.recived);
 this.valueToSend="data after handling in child then send to parent";
    this.sender.emit(this.valueToSend);

  }

}
