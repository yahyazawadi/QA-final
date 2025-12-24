import { test, expect } from '@playwright/test';
import { HomePage } from '../POMs/HomePage';
import { ProductDetailPage } from '../POMs/ProductDetailPage';

test.describe('Add to Cart Feature', () => {
    let homePage: HomePage;
    let productDetailPage: ProductDetailPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });

    test('Add product to cart shows toast and updates badge', async ({ page }) => {
        await homePage.openFirstProduct();

        productDetailPage = new ProductDetailPage(page);
        await productDetailPage.addToCart();

        await productDetailPage.expectToast();
    });

    test('Add multiple quantity before adding to cart', async ({ page }) => {
        await homePage.openFirstProduct();

        productDetailPage = new ProductDetailPage(page);

        //  default is 1, so click increase twice
        await productDetailPage.setQuantity(3);

        await productDetailPage.addToCart();

        await productDetailPage.expectToast();
        await productDetailPage.expectCartBadgeToShow('3');
    });
});