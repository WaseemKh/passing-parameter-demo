
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentName: string;
  parentNameAfterEdit: string;
  constructor() { }

  ngOnInit() {
    this.parentName = "Parent sent data to child";
  }
  reciver(parenNameAfterHandling: any) {
    console.log("Data Agter Handling", parenNameAfterHandling);
    this.parentNameAfterEdit = parenNameAfterHandling;

  }


}
