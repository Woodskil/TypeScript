import { test, expect } from '@playwright/test';
import { clientUrls } from '../test-data/urls';
import ClientPage from '../src/pages/client-page';


test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);

  const clientPage = new ClientPage(page, clientUrls.HelpingHandFoundation);
  await clientPage.open();
  await clientPage.donatButton.click();
});

test('Negative Credite Card Donation', async ({ page }) => {
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
