import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages = [
    {
      name: 'Page 1'
    },
    {
      name: 'Page 2'
    },
    {
      name: 'Page 3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
