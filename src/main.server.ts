import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { platformServer } from '@angular/platform-server';

const bootstrap = () => {
  const platform = platformServer();
  return bootstrapApplication(AppComponent, {
    ...config,
    providers: [
      ...config.providers || [],
      platform.providers
    ]
  });
};

export default bootstrap;
