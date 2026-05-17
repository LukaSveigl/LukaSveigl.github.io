import { Component, input } from '@angular/core';

import { Project } from '../../../core/models/project.model';

import { TagBadge } from '../tag-badge/tag-badge';

@Component({
  selector: 'app-project-card',
  imports: [TagBadge],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
