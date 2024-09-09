import Login from "../e2e/login";

describe("Test scenario VC-12", () => {
  beforeEach(() => {
    const loginPage = new Login();
    loginPage.loginAccount();
  });

  it("Activated toggle button", function () {

    cy.xpath("//li[1]//div[1]//*[name()='svg']").eq(0).click();

    cy.get('.chakra-input').type('Collagen drink {enter}');
    cy.wait(1000);

    cy.get('.styles_card-info__uYTN4').eq(0).click();

    cy.wait(5000); 
    cy.xpath("//button[@id='productDetail-button-counter']//*[name()='svg']")
      .should('be.visible') 
      .click({ force: true }); 


  });
});
