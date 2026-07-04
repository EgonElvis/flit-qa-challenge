const { test, expect } = require('@playwright/test');

const LOGIN_URL = 'https://flitdev.web.app/login';

const CREDENTIALS = {
  email: 'candidatoqa+f@flitapp.com.br',
  password: 'zcksnr',
};

async function login(page) {
  await page.goto(LOGIN_URL);

  await page.getByRole('textbox', { name: 'E-mail' }).fill(CREDENTIALS.email);
  await page.getByRole('textbox', { name: 'Senha' }).fill(CREDENTIALS.password);
  await page.getByRole('button', { name: 'LOGIN' }).click();
}

async function acessarTelaUsuarios(page) {
  await page.getByText('Cadastroskeyboard_arrow_right').click();
  await page.getByRole('link', { name: 'Usuários' }).click();
}

test.describe('Cadastro de Usuários - Flit', () => {

  test('CT-001 - Validar acesso à tela de Usuários', async ({ page }) => {

    await login(page);
    await acessarTelaUsuarios(page);

    await expect(
      page.getByRole('heading', { name: 'Usuários' })
    ).toBeVisible({ timeout: 15000 });

    await expect(
      page.getByText('Listagem de usuários')
    ).toBeVisible();

    await expect(
      page.getByRole('button', { name: 'Add button' })
    ).toBeVisible();

  });

  test('CT-003 - Validar navegação entre as abas do cadastro', async ({ page }) => {

    await login(page);
    await acessarTelaUsuarios(page);

    await page.getByRole('button', { name: 'Add button' }).click();

    await expect(
      page.getByText('Novo usuário')
    ).toBeVisible({ timeout: 15000 });

    // Aba Endereço
    await page.getByText('Endereço', { exact: true }).click();
    await expect(
      page.getByText('Endereço residencial')
    ).toBeVisible();

    // Aba Parâmetros
    await page.getByText('Parâmetros', { exact: true }).click();
    await expect(
      page.getByText('Permissões')
    ).toBeVisible();

    // Aba Perímetros
    await page.locator('#mat-tab-label-0-3')
      .getByText('Perímetros')
      .click();

    await expect(
      page.locator('#mat-tab-label-0-3')
    ).toHaveClass(/mat-tab-label-active/);

    // Aba Benefícios
    await page.getByText('Benefícios').first().click();

    await expect(
      page.getByText('Benefícios').first()
    ).toBeVisible();

  });

});