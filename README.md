# MarblesDesignSystemDocu

## Development

### Serving the project with live change reload

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### A local server for the Netlify CMS admin

If you want to commit the changes from Netlify CMS admin to your current local branch you need to temporarily disable the default config that commits directly to GitHub repository.
It is just a few easy steps, follow the instructions in `src/admin/config.yml`.

### Using the Netlify CMS admin

Visit the `/admin/#` route on the local/preview/live application.

_Disclaimer: For live and preview CMS admin access you might need a some specific rights to the repository_.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist` directory. Project will be built with for production env. Use the `npm run build:dev` command for a development build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
