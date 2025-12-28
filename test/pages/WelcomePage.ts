import BasePage from "./BasePage";

class WelcomePage extends BasePage {
  get continueButton() {
    return $("~welcome_continue");
  }

  get openMyProfileButton() {
    return $("~open-my-profile");
  }

  get openSettingsButton() {
    return $("~open-settings");
  }

  get avatarInitial() {
    return $("~avatar-initial");
  }

  async waitForLoaded() {
    await this.continueButton.waitForDisplayed({ timeout: 8000 });
  }

  async tapContinueButton() {
    await this.continueButton.waitForDisplayed({ timeout: 8000 });
    await this.continueButton.click();
  }

  async isDisplayed() {
    return await this.continueButton.isDisplayed();
  }

  async isDisplayedSafe() {
    try {
      return await this.continueButton.isDisplayed();
    } catch {
      return false;
    }
  }

  async openMyProfile() {
    await this.openMyProfileButton.waitForDisplayed({ timeout: 8000 });
    await this.openMyProfileButton.click();
  }

  async openSettings() {
    await this.openSettingsButton.waitForDisplayed({ timeout: 8000 });
    await this.openSettingsButton.click();
  }
}

export default new WelcomePage();
