// require('cypress-xpath');
import Login from "./login";

describe("Test case 4", () => {
    beforeEach(() => {
      const loginPage = new Login();
      loginPage.loginAccount();
    });
    it("Choose Expedition", function () {
    cy.xpath("//*[name()='path' and contains(@d,'M21.822 7.')]").click();
    cy.get("button[class='chakra-button css-1pilj7v']").click();
    cy.get("path[d='M1.9225 9.75581L6.67834 4.99997L1.9225 0.244141L0.744171 1.42247L4.32167 4.99997L0.744171 8.57747L1.9225 9.75581Z']").click();
    cy.xpath('//div[2]//label[1]//div[1]//input[1]').click();
    cy.xpath("//p[normalize-space()='jnt']").click();
    });
  });
