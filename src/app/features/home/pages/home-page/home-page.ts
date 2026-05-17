import { Component } from '@angular/core';

import { PROJECTS } from '../../../../core/data/projects';

import { ContentWrapper } from '../../../../shared/components/content-wrapper/content-wrapper';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';

@Component({
  selector: 'app-home-page',
  imports: [ContentWrapper, ProjectCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  readonly featuredProjects = PROJECTS.filter((p) => p.featured);
}
