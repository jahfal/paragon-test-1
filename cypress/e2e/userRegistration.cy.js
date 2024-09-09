// require('cypress-xpath');
// import LoginPage from "../../integration/loginPage";

describe("Test scenario VC-12", () => {
  // beforeEach(() => {
  //   const loginPage = new LoginPage();
  //   loginPage.loginSuperadmin();
  // });
  it("Activated toggle button", function () {
    cy.visit('https://recruitment-staging-queenbee.paradev.io/register')
    cy.get('#chakra-modal--header-1 > svg').eq(0).click();
    cy.xpath('//label[2]//span[1]').click();
    cy.xpath("//button[normalize-space()='Lanjut']").click();
    cy.xpath("//input[@placeholder='Isi dengan nama lengkap Anda']").type("Anton");
    cy.get('[style="margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input').type("083453453");
    cy.get('[style="margin: 16px 0px;"] > .chakra-input__group > .chakra-input').type("Sml@12345");
    cy.wait(1000)
    cy.get("button[type='button']").click(); // Change 0 to the correct index of the button you need to click

    
    
    // cy.xpath('body > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)').type("test@example.com");
    // cy.wait(1000);
    // cy.get("a[href='/VehicleChecklistAdmin/ManageLokasi?LocationId=0']").click();
    // cy.wait(1000)
    // cy.xpath("(//span)[14]").click();
  });
});
