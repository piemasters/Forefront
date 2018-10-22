import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checked = true;
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

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleTheme() {
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }

}
