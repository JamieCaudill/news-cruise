describe("article page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=180f2a4ded404054a9c41418048e9004&category=technology",
      { fixture: "sampleData" }
    ).as("getArticles");
    cy.visit("localhost:3000");
  })

  it("should display a header", () => {
    cy.wait("@getArticles");
    cy.get(".article").first().find("a").click();
    cy.get("h1").should("contain", "News Cruise");
  })

  it("should display article details", () => {
    cy.get(".article").first().find("a").click();
    cy.url().should("include", "/article/2023-09-18T16:00:00Z")
    cy.get("h3").should("contain", "CRKD Nitro Deck review: a hefty, feature-filled Switch accessory - Polygon");
    cy.get(".story__author").should("contain", "Cameron Faulkner");
    cy.get(".story__published").should("contain", "2023-09-18");
    cy.get(".story__source").should("contain", "Source: Polygon");
    cy.get(".story__content").should("contain", "At $79.99 per set, Nintendos Joy-Cons for the Switch arent cheap to replace. And if you, like many Switch owners, have purchased more Joy-Cons than you thought you would due to the analog sticks acti… [+4043 chars]");
    cy.get("img").should("have.attr", "src");
    cy.get("a").should("contain", "Back to Articles");
  })
})