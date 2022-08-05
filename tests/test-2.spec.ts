import {
    test,
    expect
} from '@playwright/test';

test('test', async ({
    page
}) => {

    await page.goto('https://finance.yahoo.com/cryptocurrencies')
    // #scr-res-table > div.Ovx\(a\).Ovx\(h\)--print.Ovy\(h\).W\(100\%\) > table > tbody > tr:nth-child(3) > td.Va\(m\).Ta\(start\).Px\(10px\).Fz\(s\)

    const dataRows = await page.$$('#scr-res-table table > tbody > tr');


    const urls = await page.$$eval('#scr-res-table table > tbody > tr a', (elements) =>
        elements.map((el) => el.href),
    )

    // for (const url of urls) {
    //     try {
    //         await page.goto(url)
    //         console.log(url)
    //     } catch {}
    // }
    console.log(urls)
    //      let posts = []
    for (let eachRow of dataRows) {
        const child1 = await (await (eachRow.$('td:nth-child(1)'))).textContent() || '';
        const child2 = await (await (eachRow.$('td:nth-child(2)'))).textContent() || '';
        const child3 = await (await (eachRow.$('td:nth-child(3)'))).textContent() || '';
        const child4 = await (await (eachRow.$('td:nth-child(4)'))).textContent() || '';
        // var v = await eachRow.evaluate( e => e.getAttribute( 'aria-label' ) );
        const name = await eachRow.$eval('[aria-label="Name"]', el => el.textContent)
        const price = await eachRow.$eval('[aria-label="Price (Intraday)"]', el => el.textContent)
        // const name = await page.$eval('td.a\(m\).Ta\(start\).Px\(10px\).Fz\(s\)', el => el.textContent.trim())
        // const locator = await page.locator('[aria-label="Name"]').getAttribute('content');

        console.log( price, name)
    }

});