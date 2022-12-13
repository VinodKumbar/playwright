/*
1. Codegen will help to record the test 
2. need to provide the below command along with URL of website which you want to automate
npx playwright codegen https://google.com
3. Website and Playwright Inspector will get open
4. User perform manual actions on Website and Playwright inspector will record the steps 
5. Copy the code and save it and re-run it
*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Vinod Kumbar');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Vinod Kumbar - Senior QA Engineer - Signzy - LinkedIn https://in.linkedin.com › vinod-kumbar' }).click();
  await page.getByRole('heading', { name: 'Senior QA Engineer' }).click();
  await page.getByRole('heading', { name: 'Senior Engineer Quality Engineering' }).click();
  await page.getByRole('heading', { name: 'Signzy' }).click();
  await page.getByRole('heading', { name: 'Altimetrik' }).getByRole('link', { name: 'Altimetrik' }).click();
});