import { Component, Input, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import {
  fetchOneEntry,
  type BuilderContent,
  isPreviewing,
} from "@builder.io/sdk-angular";
import { Content } from "@builder.io/sdk-angular";
import { CommonModule } from "@angular/common";
import { environment } from "../../environments/environment";
import { CUSTOM_COMPONENTS } from "../builder-registry";

@Component({
  selector: "app-builder-page",
  standalone: true,
  imports: [Content, CommonModule],
  template: `
    <ng-container *ngIf="content || isPreviewing; else notFound">
      <builder-content
        [model]="model"
        [content]="content"
        [apiKey]="apiKey"
        [customComponents]="customComponents"
        [data]="data"
      ></builder-content>
    </ng-container>

    <ng-template #notFound>
      <div>404 - Content not found</div>
    </ng-template>
  `,
})
export class BuilderPage {
  isPreviewing = isPreviewing();

  @Input() model = "page";
  @Input() data: any = {};

  apiKey = environment.builderApiKey;

  content: BuilderContent | null = null;

  customComponents = CUSTOM_COMPONENTS;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    // Get data from route or use input data
    const routeData = this.route.snapshot.data;
    this.data = { ...this.data, ...routeData };

    // Only run on browser platform to avoid SSR issues
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const urlPath = window.location.pathname || "/";

    const builderContent = await fetchOneEntry({
      model: this.model,
      apiKey: this.apiKey,
      userAttributes: {
        urlPath,
      },
    });

    if (!builderContent) {
      return;
    }

    this.content = builderContent;
  }
}
