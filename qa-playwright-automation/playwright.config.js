// @ts-check
const path = require('path');
const dotenv = require('dotenv');

const result = dotenv.config({
    path: path.resolve(__dirname, '.env')
});

console.log("Config loaded");
console.log("UI_BASE_URL:", process.env.UI_BASE_URL);
//require('dotenv').config();
console.log("UI_BASE_URL =", process.env.UI_BASE_URL);
const { defineConfig } = require('@playwright/test');
//const test = require('node:test');


//import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
//import dotenv from 'dotenv';
 //import path from 'path';
 //dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
//export default defineConfig({
module.exports = defineConfig({
  testDir: './tests',
  timeout:60000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["line"],["allure-playwright"]] ,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
     //baseURL: process.env.BASE_URL,
     headless: false,
     screenshot: 'only-on-failure',
     video: 'retain-on-failure',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      //UI-Chromium
      name: 'UI-chromium',
       use: { browserName: 'chromium',
        baseURL: process.env.UI_BASE_URL,
       }
    },

    // {
    //   //UI-Firefox
    //   name: 'UI-firefox',
    //   use: { browserName: 'firefox',
    //     baseURL: process.env.UI_BASE_URL,
    //   }
    // },

    // {
    //   //UI-Webkit
    //   name: 'UI-webkit',
    //   use: { browserName: 'webkit',
    //     baseURL: process.env.UI_BASE_URL,
    //    }
    // },
    //API-Tests
    {
      name: 'API',
      testMatch: /.*\.api\.spec\.js/,
       use:{
        baseURL: process.env.API_BASE_URL,
         extraHTTPHeaders: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
    }
  }
],
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  
//reporter:[
  //['html', { outputFolder:'reports/html' }],
  //['json',{ outputFile:'reports/test-results.json' }]
  //],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

