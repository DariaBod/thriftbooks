import {Page, Locator, expect} from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly searchResults: Locator;
    readonly sortByDrop: Locator;
    readonly moreGenresButton: Locator;
    readonly bookItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('textbox', {name: 'Search 19 million titles by'})
        this.searchButton = page.getByRole('button', {name: 'Search Button'})
        this.searchResults = page.locator("//div[@class = 'AllEditionsItem-tile Recipe-default']");
        this.sortByDrop = page.getByLabel('Sort by:');
        this.moreGenresButton = page.getByRole('button', {name: 'Expand to show 17 more options'})
        this.bookItems = page.locator("//div/a[@class=\"SearchResultGridItem undefined\"]");
    }

    async goto() {
        await this.page.goto('/browse/');
    }

    async applyOption(title: string) {
        const option = this.getOption(title);
        await option.waitFor({ state: 'visible' });
        await expect(option).not.toHaveClass(/Checkbox-loading/);
        await option.click();
    }

    getOption(title: string): Locator {
        return this.page.locator(`//div[text()='${title}']/following-sibling::div`);
    }

    async expectOptionChecked(title: string, checked = true, timeout = 100000) {
        const option = this.getOption(title);
        if (checked) {
            await expect(option).toBeChecked({ timeout });
        } else {
            await expect(option).not.toBeChecked({ timeout });
        }
    }
}
