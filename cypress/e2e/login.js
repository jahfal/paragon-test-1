class Login {
    loginAccount() {
        cy.visit(
          "https://recruitment-staging-queenbee.paradev.io/login"
        );
        cy.wait(500);
        cy.get('#chakra-modal--header-1 > svg').eq(0).click();
        cy.xpath("//input[@id='page-login__tabs-number__input-number']").type("082462453");
        cy.xpath("//input[@id='page-login__tabs-email__input-password']").type("Sml@12345");
        cy.xpath("//button[@id='page-login__button-login']").click();
        cy.wait(5000);
      }
}

  export default Login;
  