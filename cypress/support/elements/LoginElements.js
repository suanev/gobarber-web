class LoginElements {
  botaoRealizarLogin = () => {
    return '.sc-AxgMl';
  };

  botaoCriarConta = () => {
    return '[href="/signup"]';
  };

  botaoEsqueciSenha = () => {
    return 'form > a';
  };

  botaoRecuperarSenha = () => {
    '.sc-AxgMl';
  };

  inputNome = () => {
    return '#nome';
  };

  inputEmail = () => {
    return '#email';
  };

  inputSenha = () => {
    return '#senha';
  };

  mensagemSucesso = () => {
    return '.sc-AxjAm';
  };

  mensagemErro = () => {
    return '.sc-AxjAm';
  };
}

export default LoginElements;
