import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor() {
    console.log('Nav Component constructor!');
  }

  ngOnInit() {
    console.log('Nav Component initialized!');
  }
}
