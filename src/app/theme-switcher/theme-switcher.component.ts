
import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
})
export class ThemeSwitcherComponent {
  isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {
    // Initialize the theme state based on the service
    this.themeService.isDarkTheme$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
  }

  toggleTheme() {
    // Toggle the theme using the service
    this.themeService.toggleTheme();
  }
}
