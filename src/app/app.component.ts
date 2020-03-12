import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Food Ordering App 2';
  darkThemeEnable: boolean;
  themeColor: string = 'red';
  menuSideNav = false;
  @HostBinding('class') componentCssClass;
  constructor(public overlayContainer: OverlayContainer, private themeService: ThemeService) {
    this.overlayContainer.getContainerElement().classList.add(this.themeColor + '-light-theme');
    this.componentCssClass = this.themeColor + '-light-theme';
    this.themeService.darkTheme.subscribe(res => {
      this.darkThemeEnable = res;
      this.setTheme();
    });
  }


  setTheme() {
    if (this.darkThemeEnable) {
      this.removeThemeClass();
      this.overlayContainer.getContainerElement().classList.add(this.themeColor + '-dark-theme');
      this.componentCssClass = this.themeColor + '-dark-theme';
    } else {
      this.removeThemeClass();
      this.overlayContainer.getContainerElement().classList.add(this.themeColor + '-light-theme');
      this.componentCssClass = this.themeColor + '-light-theme';
    }
  }
  removeThemeClass() {
    const classList = this.overlayContainer.getContainerElement().classList;
    for (let index = 0; index < classList.length; index++) {
      const className = classList[index];
      if (className.indexOf('theme') > -1) {
        this.overlayContainer.getContainerElement().classList.remove(className);
      }
    }
  }
  onToggleMenu(menuToggle: boolean){
    this.menuSideNav = !this.menuSideNav;
  }
}
