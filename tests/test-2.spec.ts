import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://playwright.dev/docs/api/class-playwright')


    const dataRows = await page.$$('div.theme-doc-markdown.markdown > ul:nth-child(4) > li');

    console.log(dataRows.length)
    for (let eachRow of dataRows) {
        const variant_id = await eachRow.$('li');
        console.log(variant_id)
    }
    

});