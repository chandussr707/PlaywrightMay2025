import {test, expect} from '@playwright/test';

test.beforeEach("Login into the system", async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("input[placeholder='Username']").fill('Admin');
await page.locator("input[placeholder='Password']").fill('admin123');
await page.locator("button[type='submit']").click();
await page.waitForTimeout(5000);

})

test('Validate the User Management Dashboard',async({page})=>{
await page.getByText('Admin', {exact: true}).click();

await expect(page.locator("//h5[text()='System Users']")).toHaveText('System Users')
await expect(page.locator("//h5[text()='System Users']")).toBeHidden();

})
test('Validate the User Job Dashboard',async({page})=>{


})
test('Validate the User Organization Dashboard',async({page})=>{


})
test('Validate the User Qualification Dashboard',async({page})=>{


})