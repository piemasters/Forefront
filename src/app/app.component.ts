import { Component, OnDestroy } from '@angular/core';

/**
 * @ignore
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/**
 * The root application component.
 * This component contains the application header, sidenav and content components.
 * It also handles the application theme (light or dark mode)
 */
export class AppComponent {
  title = 'Angular-Material';
  events: string[] = [];
  opened: boolean;
  checked = true;

  /**
   * @ignore
   */
  constructor() {
  }

  /**
   * Toggles the application between a dark and light theme
   *
   * @example
   * To activate the dark theme
   * toggleTheme(true)
   *
   * @param checked If dark mode is active
   */
  toggleTheme(checked: boolean) {
    this.checked = checked;
  }

}
