describe("Test case 5", () => {
  it("Invalid Verification Code", function () {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/register')
    cy.get('#chakra-modal--header-1 > svg').eq(0).click();
    cy.xpath('//label[2]//span[1]').click();
    cy.xpath("//button[normalize-space()='Lanjut']").click();
    cy.xpath("//input[@placeholder='Isi dengan nama lengkap Anda']").type("Andre");
    cy.get('[style="margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input').type("00292462453");
    cy.get('[style="margin: 16px 0px;"] > .chakra-input__group > .chakra-input').type("Sml@12345");
    cy.wait(1000)
    cy.xpath("//button[normalize-space()='Daftar']").click();
    cy.get('#chakra-modal--body-5 > .chakra-button').click();
    cy.get('#pin-input-13-0').type("0")
    cy.get('#pin-input-13-1').type("0")
    cy.get('#pin-input-13-2').type("0")
    cy.get('#pin-input-13-3').type("0")
    cy.get('#pin-input-13-4').type("0")
    cy.get('#pin-input-13-5').type("0")
    cy.get('.css-15icixv > .chakra-button').click()
    cy.get('.css-15icixv > .chakra-button').click({multiple: true})
  });
});
