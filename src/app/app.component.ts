import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

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
export class AppComponent implements OnDestroy {
  title = 'Angular-Material';
  events: string[] = [];
  opened: boolean;
  mobileQuery: MediaQueryList;
  checked = true;

  private _mobileQueryListener: () => void;

  /**
   * Constructor that handles
   *
   * @param changeDetectorRef Detects screen size change
   * @param media MediaMatcher for detecting screen size
   */
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('test', this._mobileQueryListener);
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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
