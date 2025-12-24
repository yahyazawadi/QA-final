import { test, expect } from '@playwright/test';
import { LoginPage } from '../POMs/LoginPage';

test.describe('Login Feature', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Successful login redirects to account page', async ({ page }) => {
        await loginPage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
        await expect(page).toHaveURL('https://practicesoftwaretesting.com/account', { timeout: 15000 });
    });

    test('Wrong password shows error message', async () => {
        await loginPage.login(process.env.TEST_EMAIL!, 'WrongPassword123!');
        await expect(loginPage.errorAlert).toBeVisible({ timeout: 10000 });
        await expect(loginPage.errorAlert).toContainText('Invalid email or password');
        await expect(loginPage.page).toHaveURL(/.*\/auth\/login/);
    });
});