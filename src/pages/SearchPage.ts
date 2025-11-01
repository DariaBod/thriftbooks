import {Page, Locator} from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly sortByDrop: Locator;
    readonly moreGenresButton: Locator;
    readonly bookItems: Locator;
    readonly options: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('textbox', {name: 'Search 19 million titles by'})
        this.searchButton = page.getByRole('button', {name: 'Search Button'})
        this.sortByDrop = page.getByLabel('Sort by:');
        this.moreGenresButton = page.getByRole('button', { name: 'Expand to show 17 more options' })
        this.bookItems = page.locator("//div/a[@class=\"SearchResultGridItem undefined\"]");
        this.options = page.locator("//div[@class='Checkbox-label bold']");
    }

    async goto() {
        await this.page.goto('/browse/');
    }

     applyOption(title: string) {
        this.getOption(title).click();
    }

     getOption(title: string) : Locator {
      //  return this.options.filter({ hasText: title });
         return this.options
             .filter({ hasText: title })
             .locator('input[type="checkbox"]')
             .first();
    }

    // async applyFilter(filterName: string) {
    //     await this.filterDropdown.selectOption({ label: filterName });
    //     await this.page.waitForLoadState('networkidle');
    // }
}
