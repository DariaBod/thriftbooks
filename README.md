# ThriftBooks UI Automation

This repository contains end-to-end UI tests for https://www.thriftbooks.com implemented with Playwright and TypeScript.  
The tests cover search and filter functionality, capture screenshots for debugging, and support Allure reporting.

---

## Prerequisites

- Node.js 18+ installed
- npm (or yarn) available
- Git (to clone the repository)
- Optional (for Allure): Java installed (if Allure CLI requires it on your environment)

---

## Quick start — from a clean machine

1. Clone repository and enter folder:
```bash
git clone <repository-url>
cd <repository-folder>
```
2. Install Node dependencies:

```bash
npm install
```
3. Install Playwright browsers:

```bash
npx playwright install
```
4. (Optional) Install Allure CLI globally if you will generate HTML reports locally:

```bash
npm install -g allure-commandline
```
### Running tests
1. Run all tests (headless, default):

```bash
npx playwright test
```
2. Run tests in headed (visible) mode:

```bash
npx playwright test --headed
```
3. Run a single test file:

```bash
npx playwright test src/tests/filters.spec.ts
```
4. Open Playwright test runner UI:

```bash
npx playwright test --ui
```
5. Run with trace recording (useful for debugging failures):

```bash
npx playwright test --trace on
````

## Test reports
 ### Playwright HTML report
After a run, Playwright report is generated automatically in playwright-report/. Open playwright-report/index.html in a browser.

### Allure report (if configured)
1. Run tests with Allure reporter enabled (or configure reporter in your Playwright config):

```bash
npx playwright test --reporter=line,allure-playwright
```
2.  Generate HTML report from raw results:

```bash
npx allure generate allure-results --clean -o allure-report
```
3. Open the generated report:

```bash
npx allure open allure-report
```

Notes:

allure-results/ folder contains raw test data and attachments.

Screenshots and other attachments should appear in Allure if you use takeScreenshot function.

### Screenshots
Screenshots are saved to the screenshots/ directory during test execution.

Typical usage: tests or helpers take screenshots after key steps and attach them to the test report.

Clean up screenshots with:

```bash
rm -rf screenshots
```
### Recommended commands (package.json scripts)

Common scripts you can use from file package.json:

"test" -> "npx playwright test"

"test:ui" -> "npx playwright test --ui"

"report" -> "npx playwright show-report"

"allure:generate" -> "allure generate --clean"

"allure:open" -> "allure open allure-report"

"codegen" -> "playwright codegen https://www.urlsample"

### Project layout (high level)
```graphql
project-root/
├─ src/
│  ├─ pages/          # Page objects
│  ├─ tests/          # Test specs
│  ├─ fixtures/       # Custom Playwright fixtures
│  └─ utils/          # Helpers (screenshots, waits, element actions)
├─ screenshots/       # Saved screenshots
├─ test-results/      # Playwright raw results and traces
├─ playwright-report/ # Playwright HTML report (index.html)
├─ allure-report/     # Generated Allure HTML report
├─ playwright.config.ts
├─ package.json
└─ tsconfig.json
```

### Contact
Author: Daria Bodiakova

Phone: +1 (206) 581-4845

Email: dariabodiakova@gmail.com
