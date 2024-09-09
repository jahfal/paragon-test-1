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
    //   cy.get('#chakra-modal--header-1 > svg').eq(0).click();
    //   cy.xpath('//label[2]//span[1]').click();
    //   cy.xpath("//button[normalize-space()='Lanjut']").click();
    //   cy.xpath("//input[@placeholder='Isi dengan nama lengkap Anda']").type("Reza");
    //   cy.get('[style="margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input').type("082462453");
    //   cy.get('[style="margin: 16px 0px;"] > .chakra-input__group > .chakra-input').type("Sml@12345");
    //   cy.wait(1000)
    //   cy.xpath("//button[normalize-space()='Daftar']").click();
    //   cy.get('#chakra-modal--body-5 > .chakra-button').click();
    //   cy.get('#pin-input-13-0').type("1")
    //   cy.get('#pin-input-13-1').type("2")
    //   cy.get('#pin-input-13-2').type("3")
    //   cy.get('#pin-input-13-3').type("4")
    //   cy.get('#pin-input-13-4').type("5")
    //   cy.get('#pin-input-13-5').type("6")
    //   cy.get('.css-15icixv > .chakra-button').click()
    //   cy.get('.chakra-link').click()
  
      
      
      // cy.xpath('body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)').type("test@example.com");
      // cy.wait(1000);
      // cy.get("a[href='/VehicleChecklistAdmin/ManageLokasi?LocationId=0']").click();
      // cy.wait(1000)
      // cy.xpath("(//span)[14]").click();
    });
  });
