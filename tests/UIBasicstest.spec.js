/*
1. test annotation with playwright test
2. JS code is asynchronous
3. all steps will execute once so we need to tell explicity to wait untill 1st step code executed, 
so we need to mark function as async and pre-fix await in code
4. function which do not have any name so write Fat pipe
5. browser is global fixture, so we need to send browser as parameter to function
6. mark browser with curly braces to make it as Playwright Browser 

*/

const {test, expect} = require("@playwright/test");

test('Browser Context Playwright Test', async ({browser})=> {

  const context = await browser.newContext(); // it will open fresh new instance - browser in incognito mode
  const page = await context.newPage();
 await page.goto("https://google.com");
 console.log(await page.title())
 await expect(page).toHaveTitle("Google");
 
});

test.only('Page Playwright Test', async ({page})=> {
    const userName = page.locator("#username");
    const passWord = page.locator("[type='password']");
    const errorText = page.locator("[style*='block']");
    const signInBtn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("if you want run only one test then use test.only "+ await page.title())
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await userName.type("rahulshetty");
    await passWord.type("learning");
    await signInBtn.click();
    console.log(await errorText.textContent());
    await expect(errorText).toContainText("Incorrect");

    await userName.fill("");
    await userName.fill("rahulshettyacademy")
    await Promise.all ([
      page.waitForNavigation(),
      signInBtn.click(),
    ]);
    
    // console.log(await cardTitles.first().textContent());  // first element
    // console.log(await cardTitles.nth(1).textContent());   // second element

    const allTitles = await cardTitles.allTextContents(); // all elements - allTextContents method is not part of Auto Wait
    console.log(allTitles);
  });