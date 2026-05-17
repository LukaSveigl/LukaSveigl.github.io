import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-badge',
  imports: [],
  templateUrl: './tag-badge.html',
  styleUrl: './tag-badge.scss',
})
export class TagBadge {
  readonly label = input.required<string>();
}
