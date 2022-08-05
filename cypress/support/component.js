// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import { html, render } from "lit";

/**
 * Example use:
 * import { html } from "lit"
 * cy.mount(html`<app-banner></app-banner>`)
 */
const mount = (component, center = true) => {
  if (center) {
    return render(
      html`<style>
          body {
            display: grid;
            place-content: center;
          }</style
        >${component}`,
      document.body
    );
  }
  return render(component, document.body);
};
Cypress.Commands.add("mount", mount);
