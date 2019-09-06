# Technical Assignment for Frontend

## User Story

Create a browser based version of the game ‘Rock, Paper, Scissors’.

Don't know the game? http://en.wikipedia.org/wiki/Rock-paper-scissors

## Acceptance Criteria

- Ability to play against the computer
- Ability to simulate a game (Computer vs Computer)
- Ability to restart the game
- Computer generated plays need to be random

## Guidelines

- The UI can be as simple or as complex as you wish
- We are keen to see how much you think is enough, and how much would go into a Minimum Viable Product.  As a guide, elegant and simple wins over feature rich every time, though extra gold stars are given to people who get excited and do more because they are having fun
- We also consider the extensibility of the code produced.  Well factored code should be relatively easily extended http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock may be a natural extension
- Bonus points for vanilla JavaScript, unit tests, good accessibility, responsive design, well commented code and comprehensive commit history
- If you could show us how to test-drive your solution using TDD, that's a big plus!

## Technical Requirements

- We prefer to use vanilla Javascript and the latest EcmaScript (ES6+) features
- Using libs/frameworks is not forbidden, but we want to see your code, not someone else's
- You can style your game assets using SASS or pure CSS
- The solution should work in IE11+ and all modern browsers

## How to start coding

Alongside this document you should find a prepared project with a few example files that help you to get started. Feel free to change the structure or add new files as you see fit.

We provided similar but simplified tooling / setup we use on an everyday basis here at Gumtree UK, but you're welcome to change anything.

### Tooling

The tooling we provide is the following:

- `webpack` to modularise your Javascript code
- `babel` to utilise ES6+ and Stage-3 features
- `node-sass` to modularise your styling via SASS
- `eslint` to make sure your code meets the standards
- `jest` to help you write and run your unit tests

### Install dependencies

To start developing, fork and clone the project first, then make sure you have Node.js *4.x* or higher.

You'll need `yarn` to install the dependencies we locked in via the `yarn.lock` checked in to this repo.

You can install `yarn` if you haven't done so via `brew install yarn`.

Once you have `yarn` installed, just run

```
$ yarn install
```

from the project folder.

### Helpful commands

You'll have the following CLI commands available:

- `yarn run dev` running `webpack-dev-server` and serving the project on `localhost`
- `yarn run test` running unit tests via `jest`
- `yarn run lint` running `eslint` against your source (and config) files

Whilst developing, run `yarn run dev` in a terminal window, `webpack` will take care of everything, bundling your project to an in-memory folder and serving it from there. Also, `yarn run test` in another terminal window to see your tests running / failing on every file change which comes very handy if you're doing TDD.

### Project structure

We've added a few example files under the `src/` folder as a sanity check that the project is up and working.

When you first run `yarn run dev` and open the project in the browser at the given url, you should see a text saying *"you are ready to go!"* in white on a green background and *"it works well!"* in the browser's console.

We hope you're already familiar with the ESMAScript modules. You'll see some examples in the provided files under the `src/js/` folder.

The `public/index.html` file is the template which `webpack` takes care of on the fly. You can add your markup to it as normal but please note, that the generated `index.css` and `index.js` is injected in by `webpack` into the `head` and `body` elements.

### Submission

Please clone the project and work within your own github repo. When you submit your finished assignment back to us please ensure that it is public so that the team can review your work. 


Hope it all makes sense, we're looking forward to your solution, happy coding! :)

*The Gumtree UK dev team*
