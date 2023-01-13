describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:1234");
  });
});

describe("PokemonCard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/");
  });

  it("should render a card element with an image, header, and subtitle", () => {
    cy.get(".card").should("have.length", 1);
    cy.get(".card-img").should("have.length", 1);
    cy.get(".card-header").should("have.length", 1);
    cy.get(".subtitle").should("have.length", 1);
  });

  it("card subtitle should say Abilities", () => {
    cy.get(".subtitle").first().should("have.text", "Abilities:");
  });
});
