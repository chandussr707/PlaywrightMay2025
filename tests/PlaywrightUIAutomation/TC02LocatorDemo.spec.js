import {test, expect} from '@playwright/test';

test('Validating Different locator for Testing', async({page})=>{
    await page.goto('https://bookcart.azurewebsites.net/');
    await page.getByRole('button',{name: 'Login'}).click();
    await page.getByLabel('Username').fill('demouser');
    await page.waitForTimeout(3000);
    await page.getByLabel('Password').fill('testing123');
    await page.getByPlaceholder('Username').clear();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Password').clear();
    await page.getByPlaceholder('Username').fill('demouser');
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Password').fill('testing123');
    
    //await page.getByRole('button',{name: 'Login'}).click();
    await page.locator("//span[text()='Login'").click();






})