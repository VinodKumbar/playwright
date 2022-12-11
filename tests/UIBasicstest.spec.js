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

test('Page Playwright Test', async ({page})=> {
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
    
    // console.log(await cardTitles.first().textContent());  // first element or .last() for last element
    // console.log(await cardTitles.nth(1).textContent());   // second element

    const allTitles = await cardTitles.allTextContents(); // all elements - allTextContents method is not part of Auto Wait
    console.log(allTitles);
});


test("UI Controls", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("#username");
    const signInBtn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control"); 
    const documentLink = page.locator("[href*='documents-request']")
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").nth(1).click();
    await page.locator("#okayBtn").click();
    expect(page.locator(".radiotextsty").nth(1)).toBeChecked();
    console.log(await page.locator(".radiotextsty").nth(1).isChecked());
    // await page.pause();            // it will open Playwright Inspector
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class", "blinkingText");
});

test.only("Child windows handling", async ({browser})=>{
  const context = await browser.newContext(); // it will open fresh new instance - browser in incognito mode
  const page = await context.newPage();
  const userName = page.locator("#username");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']")

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    documentLink.click(),
    ])
  const text = await newPage.locator(".red").textContent();
  console.log(text);
  const arrayText = text.split("@")
  const domainName = arrayText[1].split(" ")[0]
  console.log(domainName);
  await userName.type(domainName);
  await page.pause();
  console.log( await userName.textContent());

});
