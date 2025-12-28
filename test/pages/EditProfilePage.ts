import { expect } from "@wdio/globals";

class EditProfilePage {
  get nameInput() {
    return $("~edit_name_input");
  }

  get saveButton() {
    return $("~save_profile_button");
  }

  get successMessage() {
    return $(
      'android=new UiSelector().text("Name has been changed successfully")'
    );
  }

  get backButton() {
    return $("~back-button");
  }

  async updateName(name: string) {
    await this.nameInput.waitForDisplayed({ timeout: 5000 });
    await this.nameInput.clearValue();
    await this.nameInput.setValue(name);
    await driver.hideKeyboard();
    await this.saveButton.waitForEnabled({ timeout: 5000 });
    await this.saveButton.click();
  }

  async waitForSuccessMessage() {
    await this.successMessage.waitForDisplayed({ timeout: 5000 });
  }

  async navigateBack() {
    await driver.back();
  }

  async assertSuccessMessageVisible() {
    await this.waitForSuccessMessage();
    await expect(this.successMessage).toBeDisplayed();
  }
}

export default new EditProfilePage();
