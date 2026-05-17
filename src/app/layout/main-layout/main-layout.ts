import { Component, inject, signal } from '@angular/core';

import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { SidebarNav } from '../sidebar-nav/sidebar-nav';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    SidebarNav,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  readonly mobileMenuOpen = signal(false);

  private router = inject(Router);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.mobileMenuOpen.set(false);
    });
  }

  toggleMenu() {
    this.mobileMenuOpen.update((open) => !open);
  }
}
