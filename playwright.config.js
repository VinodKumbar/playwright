// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    // trace: 'on'  -> it will genrate trace files for all steps
    trace : 'retain-on-failure'   // generate trace files only for failed test steps
   },  
};

module.exports = config;
