import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("/");

  await page.isVisible("text='To get started, edit the page.tsx file.'")
});

test('has documentation link', async ({ page }) => {
  await page.goto("/");

  await page.isVisible("text='Documentation'")

});
