# Angular20BuilderApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.7 and upgraded to Angular 20.

## Features

This Angular 20 application includes:

- **Builder.io Integration**: Full integration with Builder.io's visual editor for content management
- **Server-Side Rendering (SSR)**: Configured for optimal performance and SEO
- **Custom Components**: Pre-built accessible components for semantic lists and content management
- **Modern Angular**: Built with Angular 20's latest features and best practices

## Builder.io Custom Components

The project includes several custom Builder.io components:

- **AccessibleList**: Semantic list component with full accessibility support
- **SemanticListContainer & SemanticListItem**: Two-component approach for flexible list management
- **SimpleList**: Single-component list with Builder.io blocks integration
- **Counter**: Example interactive component

## Getting Started with Builder.io

1. Set your Builder.io API key in the environment variables
2. Use the custom components in Builder.io's visual editor
3. Configure semantic lists with proper accessibility attributes
4. Leverage the repeater functionality for dynamic content

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
