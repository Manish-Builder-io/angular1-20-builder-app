import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blocks } from '@builder.io/sdk-angular';
import type { 
  RegisteredComponent, 
  BuilderBlock, 
  BuilderContextInterface, 
  RegisteredComponents 
} from '@builder.io/sdk-angular';

@Component({
  selector: 'app-accessible-list',
  standalone: true,
  imports: [CommonModule, Blocks],
  template: `
    <div class="accessible-list-container">
      <!-- List header (optional) -->
      <div *ngIf="title" class="list-header">
        <h2 class="list-title">{{ title }}</h2>
        <p *ngIf="description" class="list-description">{{ description }}</p>
      </div>

      <!-- Semantic list based on listType -->
      <ul *ngIf="listType === 'unordered'" 
          class="accessible-list" 
          [class]="listClass"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="ariaDescribedBy">
        <li *ngFor="let item of items; trackBy: trackByFn; let i = index" 
            class="list-item"
            [attr.aria-setsize]="items.length"
            [attr.aria-posinset]="i + 1"
            [attr.role]="itemRole">
          <blocks
            [blocks]="item.blocks || []"
            [path]="'items.' + i + '.blocks'"
            [parent]="builderBlock?.id"
            [context]="builderContext"
            [registeredComponents]="builderComponents">
          </blocks>
        </li>
      </ul>

      <ol *ngIf="listType === 'ordered'" 
          class="accessible-list" 
          [class]="listClass"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="ariaDescribedBy"
          [attr.start]="startNumber">
        <li *ngFor="let item of items; trackBy: trackByFn; let i = index" 
            class="list-item"
            [attr.aria-setsize]="items.length"
            [attr.aria-posinset]="i + 1"
            [attr.role]="itemRole">
          <blocks
            [blocks]="item.blocks || []"
            [path]="'items.' + i + '.blocks'"
            [parent]="builderBlock?.id"
            [context]="builderContext"
            [registeredComponents]="builderComponents">
          </blocks>
        </li>
      </ol>

      <dl *ngIf="listType === 'definition'" 
          class="accessible-list definition-list"
          [class]="listClass"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="ariaDescribedBy">
        <ng-container *ngFor="let item of items; trackBy: trackByFn; let i = index">
          <dt class="list-term" [attr.aria-setsize]="items.length" [attr.aria-posinset]="i + 1">
            <blocks
              [blocks]="item.termBlocks || []"
              [path]="'items.' + i + '.termBlocks'"
              [parent]="builderBlock?.id"
              [context]="builderContext"
              [registeredComponents]="builderComponents">
            </blocks>
          </dt>
          <dd class="list-definition">
            <blocks
              [blocks]="item.definitionBlocks || []"
              [path]="'items.' + i + '.definitionBlocks'"
              [parent]="builderBlock?.id"
              [context]="builderContext"
              [registeredComponents]="builderComponents">
            </blocks>
          </dd>
        </ng-container>
      </dl>

      <!-- Navigation list for menu items -->
      <nav *ngIf="listType === 'navigation'" 
           class="accessible-list navigation-list"
           [class]="listClass"
           [attr.aria-label]="ariaLabel"
           [attr.aria-describedby]="ariaDescribedBy">
        <ul class="nav-list">
          <li *ngFor="let item of items; trackBy: trackByFn; let i = index" 
              class="nav-item"
              [attr.aria-setsize]="items.length"
              [attr.aria-posinset]="i + 1">
            <blocks
              [blocks]="item.blocks || []"
              [path]="'items.' + i + '.blocks'"
              [parent]="builderBlock?.id"
              [context]="builderContext"
              [registeredComponents]="builderComponents">
            </blocks>
          </li>
        </ul>
      </nav>

      <!-- Empty state -->
      <div *ngIf="!items || items.length === 0" 
           class="empty-state"
           [attr.aria-live]="'polite'">
        <p class="empty-message">{{ emptyMessage || 'No items to display' }}</p>
      </div>
    </div>
  `,
  styles: [`
    .accessible-list-container {
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

    .accessible-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .list-item {
      margin-bottom: 0.5rem;
      padding: 0.75rem;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      background: #fff;
      transition: all 0.2s ease;
    }

    .list-item:hover {
      border-color: #1976d2;
      box-shadow: 0 2px 4px rgba(25, 118, 210, 0.1);
    }

    .list-item:focus-within {
      outline: 2px solid #1976d2;
      outline-offset: 2px;
    }

    /* Definition list styles */
    .definition-list {
      display: grid;
      gap: 1rem;
    }

    .list-term {
      font-weight: 600;
      color: #333;
      margin: 0;
    }

    .list-definition {
      margin: 0 0 0 1rem;
      color: #666;
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

    .nav-item {
      margin: 0;
    }

    /* Grid layout option */
    .accessible-list.grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    }

    .accessible-list.grid .list-item {
      margin-bottom: 0;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .nav-list {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .accessible-list.grid {
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
export class AccessibleListComponent implements AfterContentInit {
  @Input() items: any[] = [];
  @Input() listType: 'unordered' | 'ordered' | 'definition' | 'navigation' = 'unordered';
  @Input() title?: string;
  @Input() description?: string;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;
  @Input() itemRole?: string;
  @Input() listClass?: string;
  @Input() startNumber?: number;
  @Input() emptyMessage?: string;
  @Input() trackByFn: (index: number, item: any) => any = this.defaultTrackBy;

  // Builder.io specific inputs
  @Input() builderBlock!: BuilderBlock;
  @Input() builderContext!: BuilderContextInterface;
  @Input() builderComponents: RegisteredComponents = {};

  @ContentChildren('listItem') listItems!: QueryList<any>;

  ngAfterContentInit() {
    // Debug: Log the builderBlock to see if it's properly set
    console.log('BuilderBlock ID:', this.builderBlock?.id);
    console.log('BuilderContext:', this.builderContext);
    console.log('BuilderComponents:', this.builderComponents);
    console.log('Items:', this.items);
    
    // Ensure proper ARIA attributes are set
    this.listItems?.forEach((item, index) => {
      if (item.nativeElement) {
        item.nativeElement.setAttribute('aria-setsize', this.items.length);
        item.nativeElement.setAttribute('aria-posinset', index + 1);
      }
    });
  }

  // Default trackBy function
  defaultTrackBy(index: number, item: any): any {
    return item.id || index;
  }
}

// Builder.io registration
export const accessibleListInfo: RegisteredComponent = {
  component: AccessibleListComponent,
  name: 'AccessibleList',
  inputs: [
    {
      name: 'items',
      type: 'list',
      broadcast: true,
      defaultValue: [
        { blocks: [] },
        { blocks: [] }
      ],
      subFields: [
        {
          name: 'blocks',
          type: 'uiBlocks',
          description: 'Builder blocks for this list item'
        },
        {
          name: 'termBlocks',
          type: 'uiBlocks',
          description: 'Builder blocks for definition list terms (definition list only)'
        },
        {
          name: 'definitionBlocks',
          type: 'uiBlocks',
          description: 'Builder blocks for definition list definitions (definition list only)'
        }
      ]
    },
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
      name: 'itemRole',
      type: 'string',
      description: 'ARIA role for individual list items'
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
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderComponents: true,
    builderContext: true,
  }
};
