import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';
  navMenuOpen: boolean = false;

  openMenu() {
    this.navMenuOpen = true;
  }

  closeMenu() {
    this.navMenuOpen = false;
  }
}
