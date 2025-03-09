# do-not-use-cy-dot-xpath

[![CI](https://github.com/wlsf82/do-not-use-cy-dot-xpath/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/do-not-use-cy-dot-xpath/actions/workflows/ci.yml)

Sample project to demonstrate the rule `no-xpath` from v4.2.0 of eslint-plugin-cypress.

```sh
> eslint .


/Users/johndoe/workspaces/do-not-use-cy-dot-xpath/cypress/e2e/playground.cy.js
   7:5  error  Avoid using cy.xpath command  cypress/no-xpath
   8:5  error  Avoid using cy.xpath command  cypress/no-xpath
  11:5  error  Avoid using cy.xpath command  cypress/no-xpath

✖ 3 problems (3 errors, 0 warnings)
```
