import { html } from "lit";

describe("test-component", () => {
  it("renders correctly", () => {
    cy.mount(html`<p>Hello world</p>`);
    cy.get("body").then(($body) => {
      expect($body.find("p").length).to.eq(1);
    });
  });
});
