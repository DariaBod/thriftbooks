import {Locator} from '@playwright/test';

export async function selectDropdownByText(
    dropdown: Locator,
    optionText: string,
    optionsSelector?: string
): Promise<void> {
    const page = dropdown.page();
    const tagName = await dropdown.evaluate(el => el.tagName.toLowerCase());

    if (tagName === 'select') {
        await dropdown.selectOption({label: optionText});
        return;
    }

    await dropdown.click();

    const options = optionsSelector
        ? page.locator(optionsSelector)
        : page.locator(`text="${optionText}"`);

    const target = options.filter({hasText: optionText}).first();
    await target.waitFor({state: 'visible'});
    await target.click();
}
