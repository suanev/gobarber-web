import LoginPage from '../pageobjects/LoginPage';

const loginPage = new LoginPage();

describe('Acesso ao sistema', () => {
  Given('que estou na página de login do Go Barber', () => {
    loginPage.acessarSite();
  });

  When('preencho o campo email com um nome válido', () => {
    loginPage.preencheCampoEmail('teste@teste.com');
  });

  And('preencho o campo senha com uma senha válida', () => {
    loginPage.preencheCampoSenha('Teste123');
  });

  Then('sou direcinado para a página inicial do Go Barber', async () => {
    await loginPage.efetuaLogin();
    loginPage.acessarSite();
  });

  When('preencho o campo email com um nome inválido', () => {
    loginPage.informarEmail('teste1@teste.com');
  });

  And('preencho o campo senha com uma senha válida', () => {
    loginPage.informarSenha('Teste123');
  });

  And('clico no botão para efetuar login', () => {
    loginPage.efetuaLogin();
  });

  Then('recebo uma mensagem de erro', () => {
    cy.get('strong').should('contain', 'Erro na autenticação');
  });
});
