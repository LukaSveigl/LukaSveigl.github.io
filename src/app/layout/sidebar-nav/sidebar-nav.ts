import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { PROJECTS } from '../../core/data/projects';

@Component({
  selector: 'app-sidebar-nav',
  imports: [RouterLink, ThemeToggle],
  templateUrl: './sidebar-nav.html',
  styleUrl: './sidebar-nav.scss',
})
export class SidebarNav {
  readonly liveProjects = PROJECTS.filter((p) => !!p.liveUrl);
}
