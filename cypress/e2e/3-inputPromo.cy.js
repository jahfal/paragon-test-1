// require('cypress-xpath');
import Login from "./login";

describe("Test case 3", () => {
    beforeEach(() => {
      const loginPage = new Login();
      loginPage.loginAccount();
    });
    it("Input promo", function () {
    cy.xpath("//*[name()='path' and contains(@d,'M21.822 7.')]").click();
    cy.get("button[class='chakra-button css-1pilj7v']").click();
    cy.xpath("//p[@class='chakra-text style_promo-ticket-text__vBZT1 css-0']").click();
    cy.get('.chakra-input').type('QRP-TEST-123');
    cy.get('.style_input-promo-container__xV2HC > .chakra-button').click();
    cy.xpath("//*[name()='path' and contains(@d,'M16.192 6.')]").click();
    
    });
  });
