import { Page, Locator } from '@playwright/test';
import { allure } from 'allure-playwright';
import fs from 'fs';
import path from 'path';

export async function takeScreenshot(page: Page, name: string, element?: Locator) {
    const dir = path.resolve('screenshots');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    const filePath = path.join(dir, `${name.replace(/\s+/g, '_')}.png`);

    if (element) {
        await element.screenshot({ path: filePath });
    } else {
        await page.screenshot({ path: filePath, fullPage: true });
    }

    await allure.attachment(name, fs.readFileSync(filePath), 'image/png');
}
