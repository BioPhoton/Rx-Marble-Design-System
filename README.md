# MarblesDesignSystemDocu

## Development

### Serving the project with live change reload

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### A local server for the Netlify CMS admin

If you want to commit the changes from Netlify CMS admin to your current local branch you need to run `npm run start:admin` that runs admin CMS local server and serves app locally. Navigate to `http://localhost:4200/admin/#` to use the CMS and `http://localhost:4200/` to see the application. The app will automatically reload if you change any of the source files and file watcher will reload the app with changes to the static data files at `src/static/diagrams` folder.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist` directory. Project will be built with for production env. Use the `npm run build:dev` command for a development build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
