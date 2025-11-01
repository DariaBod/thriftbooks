import { test as baseTest } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

type MyFixtures = {
    searchPage: SearchPage;
};

export const test = baseTest.extend<MyFixtures>({
    searchPage: async ({ page }, use) => {
        const searchPage = new SearchPage(page);
        await searchPage.goto();
        await use(searchPage);
    },
});

export { expect } from '@playwright/test';
