import type { ChainablePromiseElement } from "webdriverio";

export default class BasePage {
  protected async waitForDisplayed(
    element: ChainablePromiseElement,
    timeout = 10000
  ) {
    await element.waitForDisplayed({ timeout });
  }

  protected async tap(element: ChainablePromiseElement) {
    await this.waitForDisplayed(element);
    await element.click();
  }

  protected async type(element: ChainablePromiseElement, value: string) {
    await this.waitForDisplayed(element);
    await element.setValue(value);
  }

  protected async exists(element: ChainablePromiseElement): Promise<boolean> {
    return element.isExisting();
  }
}
