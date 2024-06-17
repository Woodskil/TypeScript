# Тестовое на вакансию QA Automation Engineer

Dependencies:

```
"@playwright/test": "^1.42.1",
"@types/node": "^20.11.24",
"allure-commandline": "^2.27.0",
"allure-playwright": "^2.13.0"
```

Pre-requisites:

1. Need to install latest node from https://nodejs.org/en
2. Run following commands in the terminal:

```
npm install
npx playwright install
```

To start test run the following command in the terminal:

```
npx playwright test --headed
```

To show allure report run the following command in the terminal:

```
npx allure serve allure-results
```
