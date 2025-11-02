import {test, expect} from '../fixtures/SearchFixture';

test.describe('Filters on ThriftBooks', () => {

    test('Check books count', async ({searchPage}) => {
        expect(await searchPage.bookItems.count()).toBe(50);
    });

    test('Check multiple filter options', async ({searchPage}) => {
        const options = ['Movies & TV', 'Books', 'Music', 'Video Games', 'Gifts'];

        for (const title of options) {
            await test.step(`Select and verify ${title}`, async () => {
                await searchPage.applyOption("Movies & TV");
                await searchPage.expectOptionChecked("Movies & TV");
                await searchPage.applyOption("Movies & TV");
            });
        }
    });

    test('Check multiple searches results', async ({searchPage}) => {
        const options = ['harry potter', 'hobbit', 'fahrenheit 451'];

        for (const expectedTitle of options) {
            await test.step(`Search and verify result for ${expectedTitle}`, async () => {
                await searchPage.searchInput.fill(expectedTitle);
                await searchPage.searchButton.click();
                await searchPage.searchResults.first().waitFor({ state: 'visible', timeout: 10000 });
                const results = searchPage.searchResults;
                const count = await results.count() < 10 ? await results.count() : 10;
                for (let i = 0; i < count; i++) {
                    const title = await results.nth(i).innerText();
                    expect(title.toLowerCase()).toContain(expectedTitle);
                }
            });
        }
    });
});
