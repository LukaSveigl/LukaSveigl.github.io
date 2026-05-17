import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly lightMode = signal(localStorage.getItem('theme') === 'light');

  constructor() {
    this.applyTheme();
  }

  toggleTheme() {
    this.lightMode.update((v) => !v);

    localStorage.setItem('theme', this.lightMode() ? 'light' : 'dark');

    this.applyTheme();
  }

  private applyTheme() {
    if (this.lightMode()) {
      document.body.classList.remove('dark-theme');
      return;
    }

    document.body.classList.add('dark-theme');
  }
}
