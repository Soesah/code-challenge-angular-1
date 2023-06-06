# FedExSignup Code Challenge By Carl Giesberts

- I chose to do my own css. I had some lying around.
- I used the angular CLI to generate components. It's a lot of code and a lot of files, but such is Angular.
- I prefer splitting things into smaller components. Large templates annoy me. Readability is first on my list of decent code.
- I created a seperate module, a service for the request, and a component for the form warnings. This is better for seperation of concerns.
- The validations have 1 weird thing. The validator is called `minLength` but writes a `minlength` (all lower) key into the `errors` object.
- Tried using `Validators.email`, wasn't impressed. Used a regular expression with a bit more meaningful validation.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running coverage

Run `npm run coverage` to verify code coverage

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
