
import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/auth/register');
        await this.page.waitForLoadState('networkidle');
    }

    async register() {
        await this.page.locator('[data-test="first-name"]').fill(process.env.TEST_FIRST_NAME!);
        await this.page.locator('[data-test="last-name"]').fill(process.env.TEST_LAST_NAME!);
        await this.page.locator('[data-test="dob"]').fill(process.env.TEST_DATE_OF_BIRTH!);
        await this.page.locator('[data-test="street"]').fill(process.env.TEST_ADDRESS!);
        await this.page.locator('[data-test="postal_code"]').fill(process.env.TEST_POSTCODE!);
        await this.page.locator('[data-test="city"]').fill(process.env.TEST_CITY!);
        await this.page.locator('[data-test="state"]').fill('Test State');
        await this.page.locator('[data-test="country"]').selectOption('NL');
        await this.page.locator('[data-test="phone"]').fill('1234567890');
        await this.page.locator('[data-test="email"]').fill(process.env.TEST_EMAIL!);
        await this.page.locator('[data-test="password"]').fill(process.env.TEST_PASSWORD!);
        await this.page.locator('[data-test="register-submit"]').click();
    }
}