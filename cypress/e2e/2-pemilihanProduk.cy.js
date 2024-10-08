import Login from "../e2e/login";

describe("Test case 2", () => {
  beforeEach(() => {
    const loginPage = new Login();
    loginPage.loginAccount();
  });

  it("Activated toggle button & Add to basket", function () {
    activateToggleButton();
  });
});

function activateToggleButton() {

  cy.xpath("//li[1]//div[1]//*[name()='svg']").eq(0).click();


  cy.get('.chakra-input').type('Collagen drink {enter}');
  cy.wait(1000);


  cy.get('.styles_card-info__uYTN4').eq(0).click();


  cy.wait(5000); 
  cy.xpath("//button[@id='productDetail-button-counter']//*[name()='svg'][2]/*[name()='path'][1] ")
    .should('be.visible')
    .click({ multiple: true, force: true }) 
    .click({ multiple: true, force: true })
    .click({ multiple: true, force: true })
    .click({ multiple: true, force: true })

  cy.xpath("//h1[normalize-space()='Beli sekarang']").click({ multiple: true, force: true })
}
