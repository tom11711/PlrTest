// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('test@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('tester123');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page).toHaveTitle('ngx-admin Demo Application');
});