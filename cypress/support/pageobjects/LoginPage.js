import LoginElements from '../elements/LoginElements';
const loginElements = new LoginElements();
const url = Cypress.config('baseUrl');

class LoginPage {
  acessarSite() {
    cy.visit(url);
  }

  preencheCampoEmail() {
    cy.get('form > :nth-child(2)').type('teste@teste.com');
  }

  preencheCampoSenha() {
    cy.get('form > :nth-child(3)').type('Teste123');
  }

  clicarBotaoRealizarLogin() {
    cy.get(loginElements.botaoLogin()).click();
    cy.url().should('be.equal', `${url}dashboard`);
  }

  informarEmail(email) {
    cy.get(loginElements.inputEmail()).type(email);
  }

  informarSenha(senha) {
    cy.get(loginElements.inputSenha()).type(senha);
  }

  efetuaLogin() {
    cy.get(loginElements.botaoRealizarLogin()).click();
  }
}

export default LoginPage;
