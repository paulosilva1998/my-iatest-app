import { Builder, By, until } from "selenium-webdriver";

const BASE_URL = "http://localhost:5173";

(async function testeLoginBasico() {
  // 1. Cria a instância do Chrome
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // ======== CENÁRIO 1: Campos vazios ========
    console.log("Cenário 1: campos vazios deve exibir mensagem de erro");
    await driver.get(`${BASE_URL}/`);

    const botaoEntrar = await driver.findElement(By.id("botao-entrar"));
    await botaoEntrar.click();

    const mensagemErro = await driver.wait(
      until.elementLocated(By.id("mensagem-erro")),
      3000
    );

    const textoErro = await mensagemErro.getText();
    if (textoErro.includes("Preencha e-mail e senha")) {
      console.log("Mensagem de erro exibida corretamente!");
    } else {
      throw new Error(`Mensagem inesperada: ${textoErro}`);
    }

    // ======== CENÁRIO 2: Login correto ========
    console.log("Cenário 2: login válido deve navegar para o dashboard");
    const campoEmail = await driver.findElement(By.id("campo-email"));
    const campoSenha = await driver.findElement(By.id("campo-senha"));

    await campoEmail.clear();
    await campoSenha.clear();
    await campoEmail.sendKeys("aluno@ifrs.edu.br");
    await campoSenha.sendKeys("123456");

    await botaoEntrar.click();

    // Aguarda a URL mudar para /dashboard
    await driver.wait(until.urlContains("/dashboard"), 5000);

    // Aguarda a renderização do título do dashboard
    const titulo = await driver.wait(
      until.elementLocated(By.css('[data-testid="titulo-dashboard"]')),
      5000
    );

    const textoTitulo = await titulo.getText();
    if (/bem-vindo/i.test(textoTitulo)) {
      console.log("Login realizado e dashboard exibido com sucesso!");
    } else {
      throw new Error("Título do dashboard incorreto");
    }

    console.log("Teste finalizado sem erros!");
  } catch (erro) {
    console.error("Falha durante o teste:", erro.message);
  } finally {
    // Fecha o navegador ao final da execução
    await driver.quit();
  }
})();