import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { Counter } from "./components/counter.component";
import { accessibleListInfo } from "./components/accessible-list.component";
import { semanticListContainerInfo } from "./components/semantic-list-container.component";
import { semanticListItemInfo } from "./components/semantic-list-item.component";
import { simpleListInfo } from "./components/simple-list.component";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Counter,
    name: "Counter",
    meta: {
      selector: "app-counter",
      standalone: true,
    },
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  },
  accessibleListInfo,
  semanticListContainerInfo,
  semanticListItemInfo,
  simpleListInfo,
];
