const registerUser = (fullName, phoneNumber, password, pin) => {
  // Visit registration page
  cy.visit('https://recruitment-staging-queenbee.paradev.io/register');

  // Close modal, select option, and proceed
  cy.get('#chakra-modal--header-1 > svg').eq(0).click();
  cy.xpath('//label[2]//span[1]').click();
  cy.xpath("//button[normalize-space()='Lanjut']").click();

  // Fill out registration form
  cy.xpath("//input[@placeholder='Isi dengan nama lengkap Anda']").type(fullName);
  cy.get('[style="margin-right: 1rem; margin-bottom: 0px;"] > .chakra-input__group > .chakra-input').type(phoneNumber);
  cy.get('[style="margin: 16px 0px;"] > .chakra-input__group > .chakra-input').type(password);

  // Submit registration
  cy.wait(1000);
  cy.xpath("//button[normalize-space()='Daftar']").click();

  // Enter PIN
  cy.get('#chakra-modal--body-5 > .chakra-button').click();
  pin.split('').forEach((digit, index) => {
    cy.get(`#pin-input-13-${index}`).type(digit);
  });

  // Finalize registration
  cy.get('.css-15icixv > .chakra-button').click();
  cy.get('.styles_verifSuccess-container__8mTVo > .chakra-button').click({ multiple: true });
};

describe("Test case 1", () => {
  it("Registration for first user", function () {
    const fullName = "Rezzza";
    const phoneNumber = "08236245997";
    const password = "Sml@12345";
    const pin = '123456';
    registerUser(fullName, phoneNumber, password, pin);
  });
});
