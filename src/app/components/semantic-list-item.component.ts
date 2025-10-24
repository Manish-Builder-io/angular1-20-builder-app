import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blocks } from '@builder.io/sdk-angular';
import type { 
  RegisteredComponent, 
  BuilderBlock, 
  BuilderContextInterface, 
  RegisteredComponents 
} from '@builder.io/sdk-angular';

@Component({
  selector: 'app-semantic-list-item',
  standalone: true,
  imports: [CommonModule, Blocks],
  template: `
    <li class="semantic-list-item"
        [attr.aria-setsize]="ariaSetSize"
        [attr.aria-posinset]="ariaPosInSet" 
        [attr.role]="itemRole">
      <blocks
        [blocks]="blocks || []"
        [path]="'component.options.blocks'"
        [parent]="builderBlock.id"
        [context]="builderContext"
        [registeredComponents]="builderComponents">
      </blocks>
    </li>
  `,
  styles: [`
    .semantic-list-item {
      margin-bottom: 0.5rem;
      padding: 0.75rem;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      background: #fff;
      transition: all 0.2s ease;
    }

    .semantic-list-item:hover {
      border-color: #1976d2;
      box-shadow: 0 2px 4px rgba(25, 118, 210, 0.1);
    }

    .semantic-list-item:focus-within {
      outline: 2px solid #1976d2;
      outline-offset: 2px;
    }

    /* Grid layout adjustments */
    .semantic-list.grid .semantic-list-item {
      margin-bottom: 0;
    }
  `]
})
export class SemanticListItemComponent {
  @Input() blocks: any[] = [];
  @Input() ariaSetSize?: number;
  @Input() ariaPosInSet?: number;
  @Input() itemRole?: string;

  // Builder.io specific inputs
  @Input() builderBlock!: BuilderBlock;
  @Input() builderContext!: BuilderContextInterface;
  @Input() builderComponents: RegisteredComponents = {};
}

// Builder.io registration
export const semanticListItemInfo: RegisteredComponent = {
  component: SemanticListItemComponent,
  name: 'SemanticListItem',
  inputs: [
    {
      name: 'blocks',
      type: 'uiBlocks',
      defaultValue: [],
      description: 'Builder blocks for this list item'
    },
    {
      name: 'ariaSetSize',
      type: 'number',
      description: 'ARIA setsize for accessibility'
    },
    {
      name: 'ariaPosInSet',
      type: 'number',
      description: 'ARIA posinset for accessibility'
    },
    {
      name: 'itemRole',
      type: 'string',
      description: 'ARIA role for this list item'
    }
  ],
  canHaveChildren: true,
  shouldReceiveBuilderProps: {
    builderBlock: true,
    builderComponents: true,
    builderContext: true,
  },
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Text',
        options: {
          text: 'List item content'
        }
      }
    }
  ]
};
