This is a Seed Project with Redux & Redux Saga for starting out an application.

## Technologies Used:

- React JS
- Redux
- Redux Saga Middleware
- Material UI for Component Library
- React Router DOM for Routing
- Testing Framework Jest

## Folder Structure

### `Inside the src Folder`

- src
  - App
    - Components -> resides all the presentational/dumb components
      - Layout -> where Header and Footer resides. Everything pertain to the layout of the app, side bar etc.
    - Pages -> resides the features/module for the application
      - Home
        - index.js -> which connects the base container to redux and exposes the container api.
        - Home.Container.js -> where all the event handlers and redux action resides.
        - dux.js -> where all the Actions, Action creators, and reducer resides. Reducer is the default export according to Ducks Modular Pattern.
        - sagas.js -> where all the sagas (Async) resides. Exports an array of take latest saga watchers
        - RenderList.js -> is a presentational component where user names are rendered from the API.
      - About -> Same as Home structure.
    - Routes -> resides the global routes for the application
    - Theme -> where we define the global theme object for material ui
    - index.js -> root file for App
- index.js -> This is start file for the application

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
