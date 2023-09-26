// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$: Observable<boolean> = this.isDarkThemeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme !== null) {
      this.isDarkThemeSubject.next(savedTheme === 'true');
    } else {
      // If no preference is found, set the default theme
      this.isDarkThemeSubject.next(false); // Set to false for light theme
    }
  }

  toggleTheme() {
    const currentTheme = this.isDarkThemeSubject.value;
    const newTheme = !currentTheme;

    // Update the theme in local storage
    localStorage.setItem('isDarkTheme', newTheme.toString());

    // Update the theme subject to trigger changes in components
    this.isDarkThemeSubject.next(newTheme);
  }
}
