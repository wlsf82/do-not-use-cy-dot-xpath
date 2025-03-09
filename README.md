# do-not-use-cy-dot-xpath

[![CI](https://github.com/wlsf82/do-not-use-cy-dot-xpath/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/do-not-use-cy-dot-xpath/actions/workflows/ci.yml)

Sample project to demonstrate the rule `no-xpath` from v4.2.0 of eslint-plugin-cypress.

> For more details, see the [closed issue](https://github.com/cypress-io/eslint-plugin-cypress/issues/218) on GitHub.

## Pre-requirements

It is required to have git, Node.js and npm installed to clone and run this project.

> I've used versions `2.42.1`, `v20.13.1` and `10.8.1` of git, Node.js and npm, respectively. I suggest you use the same or later LTS versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Lint

Run `npm run lint` to run the ESLint static checks.

### Lint results

After running ESLint, you should see something like this:

```sh
> eslint .


/Users/johndoe/workspaces/do-not-use-cy-dot-xpath/cypress/e2e/playground.cy.js
   7:5  error  Avoid using cy.xpath command  cypress/no-xpath
   8:5  error  Avoid using cy.xpath command  cypress/no-xpath
  11:5  error  Avoid using cy.xpath command  cypress/no-xpath

✖ 3 problems (3 errors, 0 warnings)

```

## Tests

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open the Cypress App and run the tests in interactive mode.

### Test results

After running the tests in headless mode, you should see something like this:

```sh
(Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  playground.cy.js                         831ms        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        831ms        1        1        -        -        -

```

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
