class SettingsPage {
  get screen() {
    return $("~settings-screen");
  }

  get logoutButton() {
    return $("~logout-button");
  }

  async waitForLoaded() {
    await this.screen.waitForDisplayed({ timeout: 10000 });
  }

  async tapLogout() {
    await this.logoutButton.waitForDisplayed({ timeout: 10000 });
    await this.logoutButton.click();
  }
}

export default new SettingsPage();
