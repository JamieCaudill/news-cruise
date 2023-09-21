describe("home page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=180f2a4ded404054a9c41418048e9004&category=technology",
      { fixture: "sampleData" }
    ).as("getArticles");
    cy.visit("localhost:3000");
  });

  it("should display a header", () => {
    cy.wait("@getArticles");
    cy.get("h1").should("contain", "News Cruise");
  });

  it("should display a list of articles", () => {
    cy.get(".article").should("have.length", 5);
    cy.get(".article")
      .first()
      .should(
        "contain",
        "CRKD Nitro Deck review: a hefty, feature-filled Switch accessory - Polygon"
      )
      .and("contain", "Cameron Faulkner")
      .and("contain", "2023-09-18")
      .and(
        "contain",
        "The Nitro Deck adds more ergonomically friendly controls to the Switch without leaving rumble and motion controls on the table. It’s a solid accessory, if you don’t mind that it adds thickness."
      );
    cy.get(".article").first().find("img").should("have.attr", "src");
    cy.get(".article").first().find("a").should("contain", "Read More");
    cy.get(".article")
      .last()
      .should(
        "contain",
        "Preview the new My Little Pony cards for Magic: The Gathering - Polygon"
      )
      .and("contain", "Charlie Hall")
      .and("contain", "2023-09-18")
      .and(
        "contain",
        "Here’s those My Little Pony Magic: The Gathering cards you were looking for. Ponies: The Galloping 2 Secret Lair drop goes live Sept. 18, benefits Extra Life."
      );
    cy.get(".article").last().find("img").should("have.attr", "src");
    cy.get(".article").last().find("a").should("contain", "Read More");
  });

  it("should have an option to filter by source", () => {
    cy.get("select").select("Polygon");
    cy.get(".article").should("have.length", 2);
    cy.get(".article").first().should("contain", "Polygon");
    cy.get(".article").last().should("contain", "Polygon");
    cy.get("select").select("All");
    cy.get(".article").should("have.length", 5);
  })

  it("should display an error message if error occurs", () => {
    cy.intercept('GET', "https://newsapi.org/v2/top-headlines?country=us&apiKey=180f2a4ded404054a9c41418048e9004&category=technology", { statusCode: 500 })
    cy.get(".articles__error").should("contain", "Failed to fetch"); 
  })
});
