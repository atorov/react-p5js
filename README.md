
### UPDATE 2019-04-21

An example, build on the same concept but using the latest React features such as **hooks and context**), can be found [here](https://github.com/atorov/react-hooks-p5js)

---

# Using React with p5.js

![alt application screenshot](https://raw.githubusercontent.com/atorov/react-p5js/master/public/img/screeshot.png)

This project demonstrates the possibility of combining React and p5.js.

---

**UPDATE 2018-11-09 (v0.3):**

![alt application screen cast](https://raw.githubusercontent.com/atorov/react-p5js/master/public/img/screencast.gif)

- Updated: Synchronized with the new React (16.3+) lifecycle methods;
- Updated: Improved and simplified communication between main React app and p5 sketches;
- New feature: Multiple independent P5 on the same page;
- New feature: Sketch code splitting into separate files.

---

[React](https://reactjs.org/) is one of the most popular JavaScript libraries for creating single page applications.<br>
[p5.js](https://p5js.org/) is a JavaScript library with a full set of drawing functionality.

Check the online version [here](http://react-p5js.surge.sh/).

The basic idea is that the p5.js sketch is wrapped in a React component. The data that comes into the sketch is passed on to this component as props. Callbacks are used to return information back from the sketch to the application.

A much more advanced example, built on the same concept, can be found [here](https://github.com/atorov/fractal-tree-simulator).

## Project Structure
The project is build on [Create React App](https://github.com/facebookincubator/create-react-app).

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files. You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack. You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.

You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard. In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

## Syntax Highlighting and Displaying Lint Output in the Editor

Тhe most popular editors should be covered and your editor should report the linting warnings..

## Code Splitting

Code splitting allows you to split your code into small chunks which you can then load on demand.
This project setup supports code splitting via [dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand).

## Adding a Router and Redux

[React Router](https://reacttraining.com/react-router/) is the most popular option.
[Redux](https://redux.js.org/) is a predictable state container for JavaScript apps.

React Router and Redux can easily be added to the project.

## Running Tests

[Jest](https://facebook.github.io/jest/) is a Node-based runner. While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder. It is recommended to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.
