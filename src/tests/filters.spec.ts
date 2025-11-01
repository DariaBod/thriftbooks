import {test, expect} from '../fixtures/SearchFixture';

test.describe('Filters on ThriftBooks', () => {
    test('Check books count', async ({searchPage}) => {
        expect(await searchPage.bookItems.count()).toBe(50);
    });

    test('Check selected options', async ({searchPage}) => {
        expect(await searchPage.bookItems.count()).toBe(50);

        await searchPage.applyOption("Movies & TV");
        await expect(searchPage.getOption("Movies & TV")).toBeChecked();
    });
});
