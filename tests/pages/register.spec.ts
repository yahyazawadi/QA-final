import { test, expect } from '@playwright/test';
import { RegisterPage } from '../POMs/RegisterPage';

test.describe('Register Feature', () => {
    test('Successful registration', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.fillRegistrationForm();

        await expect(page).toHaveURL(/.*\/auth\/login/, { timeout: 15000 });
    });
});