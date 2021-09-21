Feature: Acesso ao sistema
  Eu como usuário
  Gostaria de acessar o Go Barber
  Para que possa ver meus agendamentos do dia.

  Scenario: Logar com sucesso
    Given que estou na página de login do Go Barber
    When preencho o campo email com um nome válido
    And preencho o campo senha com uma senha válida
    Then sou direcinado para a página inicial do Go Barber

  Scenario: Logar sem sucesso
    Given que estou na página de login do Go Barber
    When preencho o campo email com um nome inválido
    And preencho o campo senha com uma senha válida
    And clico no botão para efetuar login
    Then recebo uma mensagem de erro
