import { Component } from '@angular/core';

import { PROJECTS } from '../../../../core/data/projects';

import { ContentWrapper } from '../../../../shared/components/content-wrapper/content-wrapper';

import { ProjectCard } from '../../../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects-page',
  imports: [ContentWrapper, ProjectCard],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  readonly projects = PROJECTS;
}
