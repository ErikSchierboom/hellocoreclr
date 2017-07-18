import * as protractor from "protractor";

beforeEach(async () => {
  await protractor.browser.loadAndWaitForAureliaPage("/");
});

it("HelloWorld app should load completely and have a title", async () => {
  await expect(await protractor.browser.getTitle()).toBe("Say Hello World! | Hello World");
});

it("HelloWorld app should navigate to greetings", async () => {
  const waitPromise = protractor.browser.waitForRouterComplete();
  await protractor.element(protractor.by.css('a[href="#/greetings"]')).click();
  await waitPromise;
  await expect(await protractor.browser.getTitle()).toBe("Greetings | Hello World");
});
