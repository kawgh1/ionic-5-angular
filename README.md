### Ionic app

- `ionic start ionic-tutorial blank --capacitor`

- ### build

  - `ionic build`

- ### serve

  - `ionic serve`

- ### generate Android app

  - `ionic cap add android`

- ### ionic capacitor sync will do the following:

  - Perform an Ionic build, which compiles web assets
  - Copy web assets to Capacitor native platform(s)
  - Update Capacitor native platform(s) and dependencies
  - Install any discovered Capacitor or Cordova plugins
    - `ionic cap sync android`
    - https://ionicframework.com/docs/cli/commands/capacitor-sync

- ### ionic capacitor run will do the following:

- Perform ionic build (or run the dev server from ionic serve with the --livereload option)
- Run capacitor run (or open IDE for your native project with the --open option)
- https://ionicframework.com/docs/cli/commands/capacitor-run

- ### Capacitor Plugins / Docs
- https://capacitorjs.com/docs/plugins

Your Ionic app is ready! Follow these next steps:

- Go to your new project: cd .\ionic-tutorial
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition
