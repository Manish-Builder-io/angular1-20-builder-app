import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { accessibleListInfo } from "./components/accessible-list.component";
import { semanticListContainerInfo } from "./components/semantic-list-container.component";
import { semanticListItemInfo } from "./components/semantic-list-item.component";
import { simpleListInfo } from "./components/simple-list.component";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  accessibleListInfo,
  semanticListContainerInfo,
  semanticListItemInfo,
  simpleListInfo,
];
