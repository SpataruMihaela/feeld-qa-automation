import BasePage from "./BasePage";

class DiscoveryPage extends BasePage {
  get screen() {
    return $("~discovery-screen");
  }

  get firstProfileCard() {
    return $("~profile-card-1");
  }

  get myProfileButton() {
    return $("~open-my-profile");
  }

  async isDisplayed() {
    await this.screen.waitForDisplayed({ timeout: 8000 });
  }

  async isDisplayedSafe(): Promise<boolean> {
    try {
      return await this.screen.isDisplayed();
    } catch {
      return false;
    }
  }

  async openFirstProfile() {
    await this.firstProfileCard.waitForDisplayed({ timeout: 8000 });
    await this.firstProfileCard.click();
  }

  async expectAtLeastOneProfile() {
    await this.firstProfileCard.waitForDisplayed({ timeout: 8000 });
  }

  async openMyProfile() {
    await this.myProfileButton.waitForDisplayed({ timeout: 5000 });
    await this.myProfileButton.click();
  }
}

export default new DiscoveryPage();
