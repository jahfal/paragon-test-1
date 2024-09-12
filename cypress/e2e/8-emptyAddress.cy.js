import Login from "./login";

describe("Test case 8", () => {
  beforeEach(() => {
    const loginPage = new Login();
    loginPage.loginAccount();
  });

  it("Empty Address", function () {
    activateToggleButton();
  });
});

function activateToggleButton() {

  cy.xpath("//li[1]//div[1]//*[name()='svg']").eq(0).click();


  cy.get('.chakra-input').type('peppermint single {enter}');
  cy.wait(5000);


  cy.get('.styles_card-body-h2-grid__lzKGQ').eq(0).click();


  cy.wait(5000); 
  cy.xpath("//button[@id='productDetail-button-counter']//*[name()='svg'][2]/*[name()='path'][1]")
  .should('be.visible')
  .then(($el) => {
    for (let i = 0; i < 8; i++) {
      cy.wrap($el).click({ multiple: true, force: true });
    }
  });


  cy.xpath("//h1[normalize-space()='Beli sekarang']").click({ multiple: true, force: true })
  cy.xpath("//*[name()='path' and contains(@d,'M21.822 7.')]").click();
  cy.get("button[class='chakra-button css-1pilj7v']").as('btn').click();
  cy.get('.style_promo-ticket-content__O35ux').click();
  cy.get('.chakra-input').type('QRP-TEST-123');
  cy.get('.style_input-promo-container__xV2HC > .chakra-button').click();
  cy.xpath("//*[name()='path' and contains(@d,'M16.192 6.')]").click();
  cy.get('.styles_section-receiver__change-address__4AoHM').click()
  cy.get('.styles_remove-address__rFeCe').click()
  cy.get('.styles_modal-delete__solid__bBR_o').click()


}
