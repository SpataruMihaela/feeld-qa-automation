import { expect } from "@wdio/globals";
import BasePage from "./BasePage";

class LikesPage extends BasePage {
  get openLikesButton() {
    return $("~open-likes");
  }

  get screen() {
    return $("~likes_screen");
  }

  async open() {
    await browser.waitUntil(
      async () => await this.openLikesButton.isExisting(),
      {
        timeout: 8000,
        timeoutMsg: "Likes button not found — not on Discovery screen",
      }
    );

    await this.openLikesButton.waitForDisplayed({ timeout: 8000 });
    await this.openLikesButton.click();
    await this.isDisplayed();
  }

  async isDisplayed() {
    await this.screen.waitForDisplayed({ timeout: 8000 });
  }

  async waitForScreen() {
    await this.screen.waitForDisplayed({ timeout: 10000 });
  }

  async openProfileByName(name: string) {
    const profile = $(`~liked_profile_${name.toLowerCase()}`);
    await profile.waitForDisplayed({ timeout: 8000 });
    await profile.click();
  }

  async isProfileLiked(name: string): Promise<boolean> {
    const profile = $(`~liked_profile_${name.toLowerCase()}`);
    return profile.isExisting();
  }

  async waitUntilProfileNotPresent(name: string) {
    const selector = `~liked_profile_${name.toLowerCase()}`;

    await browser.waitUntil(async () => !(await $(selector).isExisting()), {
      timeout: 8000,
      timeoutMsg: `Profile ${name} still visible in Likes after timeout`,
    });
  }

  async expectProfileByName(name: string) {
    const profile = $(`~liked_profile_${name.toLowerCase()}`);
    await profile.waitForDisplayed({ timeout: 8000 });
    await expect(profile).toBeDisplayed();
  }
}

export default new LikesPage();
