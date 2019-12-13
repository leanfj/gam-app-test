import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.sass']
})
export class DebugComponent implements OnInit {
  @Input() form;


  constructor() { }

  ngOnInit() {
  }

}
