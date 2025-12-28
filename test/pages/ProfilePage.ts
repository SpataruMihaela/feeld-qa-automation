import { expect } from "@wdio/globals";
import BasePage from "./BasePage";

class ProfilePage extends BasePage {
  get profileName() {
    return $("android.widget.TextView");
  }

  get likeButton() {
    return $("~like-button");
  }

  async isDisplayed() {
    await this.profileName.waitForDisplayed({ timeout: 10000 });
  }

  async expectProfileNameVisible() {
    const name = await this.profileName.getText();
    expect(name).toBeTruthy();
  }

  async likeProfile() {
    await this.likeButton.waitForDisplayed({ timeout: 10000 });
    await this.likeButton.click();
  }

  async goBack() {
    await driver.back();
  }
}

export default new ProfilePage();
