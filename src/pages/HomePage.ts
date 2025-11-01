import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('textbox', { name: 'Search 19 million titles by' })
        this.searchButton = page.getByRole('button', { name: 'Search Button' })
    }

    async goto() {
        await this.page.goto('/');
    }

    // async searchBook(title: string) {
    //     await this.searchInput.fill(title);
    //     await this.page.keyboard.press('Enter');
    // }
    //
    // async applyFilter(filterName: string) {
    //     await this.filterDropdown.selectOption({ label: filterName });
    //     await this.page.waitForLoadState('networkidle');
    // }
}
