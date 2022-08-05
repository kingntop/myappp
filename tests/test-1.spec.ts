import {
    test,
    expect
} from '@playwright/test';

import $ from "jquery";

class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}

interface RootObject {
    age: number;
    name: string;
}

test('test', async ({page} ) => {

    await page.goto('https://playwright.dev/docs/api/class-playwright')


    const dataRows = await page.$$('div.theme-doc-markdown.markdown > ul:nth-child(4) > li');

    console.log(dataRows.length)

})