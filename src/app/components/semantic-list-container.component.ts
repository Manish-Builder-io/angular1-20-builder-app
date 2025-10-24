import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { RegisteredComponent } from '@builder.io/sdk-angular';

@Component({
  selector: 'app-semantic-list-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="semantic-list-container">
      <!-- List header (optional) -->
      <div *ngIf="title" class="list-header">
        <h2 class="list-title">{{ title }}</h2>
        <p *ngIf="description" class="list-description">{{ description }}</p>
      </div>

      <!-- Semantic list based on listType -->
      <ul *ngIf="listType === 'unordered'" 
          class="semantic-list" 
          [class]="listClass"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="ariaDescribedBy">
        <ng-content></ng-content>
      </ul>

      <ol *ngIf="listType === 'ordered'" 
          class="semantic-list" 
          [class]="listClass"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="ariaDescribedBy"
          [attr.start]="startNumber">
        <ng-content></ng-content>
      </ol>

      <dl *ngIf="listType === 'definition'" 
          class="semantic-list definition-list"
          [class]="listClass"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="ariaDescribedBy">
        <ng-content></ng-content>
      </dl>

      <!-- Navigation list for menu items -->
      <nav *ngIf="listType === 'navigation'" 
           class="semantic-list navigation-list"
           [class]="listClass"
           [attr.aria-label]="ariaLabel"
           [attr.aria-describedby]="ariaDescribedBy">
        <ul class="nav-list">
          <ng-content></ng-content>
        </ul>
      </nav>

      <!-- Empty state -->
      <div *ngIf="!hasChildren" 
           class="empty-state"
           [attr.aria-live]="'polite'">
        <p class="empty-message">{{ emptyMessage || 'No items to display' }}</p>
      </div>
    </div>
  `,
  styles: [`
    .semantic-list-container {
      width: 100%;
    }

    .list-header {
      margin-bottom: 1rem;
    }

    .list-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
      color: #333;
    }

    .list-description {
      color: #666;
      margin: 0;
    }

    .semantic-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    /* Definition list styles */
    .definition-list {
      display: grid;
      gap: 1rem;
    }

    /* Navigation list styles */
    .navigation-list {
      background: transparent;
    }

    .nav-list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    /* Grid layout option */
    .semantic-list.grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .nav-list {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .semantic-list.grid {
        grid-template-columns: 1fr;
      }
    }

    /* Empty state */
    .empty-state {
      text-align: center;
      padding: 2rem;
      color: #666;
    }

    .empty-message {
      margin: 0;
      font-style: italic;
    }
  `]
})
export class SemanticListContainerComponent {
  @Input() listType: 'unordered' | 'ordered' | 'definition' | 'navigation' = 'unordered';
  @Input() title?: string;
  @Input() description?: string;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;
  @Input() listClass?: string;
  @Input() startNumber?: number;
  @Input() emptyMessage?: string;
  @Input() hasChildren: boolean = false;
}

// Builder.io registration
export const semanticListContainerInfo: RegisteredComponent = {
  component: SemanticListContainerComponent,
  name: 'SemanticListContainer',
  noWrap: true,
  inputs: [
    {
      name: 'listType',
      type: 'string',
      enum: ['unordered', 'ordered', 'definition', 'navigation'],
      defaultValue: 'unordered',
      description: 'Type of semantic list to render'
    },
    {
      name: 'title',
      type: 'string',
      description: 'Optional title for the list'
    },
    {
      name: 'description',
      type: 'string',
      description: 'Optional description for the list'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      description: 'ARIA label for screen readers'
    },
    {
      name: 'ariaDescribedBy',
      type: 'string',
      description: 'ID of element that describes this list'
    },
    {
      name: 'listClass',
      type: 'string',
      description: 'Additional CSS classes for the list'
    },
    {
      name: 'startNumber',
      type: 'number',
      description: 'Starting number for ordered lists'
    },
    {
      name: 'emptyMessage',
      type: 'string',
      description: 'Message to display when list is empty'
    }
  ],
  canHaveChildren: true,
  childRequirements: {
    message: 'Only SemanticListItem components are allowed as children',
    query: {
      'component.name': { $in: ['SemanticListItem'] }
    }
  },
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'SemanticListItem',
        options: {}
      }
    },
  ]
};
