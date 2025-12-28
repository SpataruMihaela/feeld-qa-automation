import BasePage from "./BasePage";

class MyProfilePage extends BasePage {
  get profileName() {
    return $("~my-profile-name");
  }

  async waitForLoaded() {
    await this.profileName.waitForDisplayed({ timeout: 8000 });
  }

  async getProfileName(): Promise<string> {
    await this.profileName.waitForDisplayed({ timeout: 8000 });
    return await this.profileName.getText();
  }

  get profileImage() {
    return $("~my-profile-image");
  }

  async hasProfileImage(): Promise<boolean> {
    return await this.profileImage.isExisting();
  }

  async isDefaultAvatarDisplayed(): Promise<boolean> {
    const label = await this.profileImage.getAttribute("content-desc");
    return label === "profile-image-default";
  }

  async isMockAvatarDisplayed(): Promise<boolean> {
    const label = await this.profileImage.getAttribute("content-desc");
    return label === "profile-image-mock";
  }

  get changePhotoButton() {
    return $("~change-profile-photo");
  }

  async tapChangePhoto() {
    await this.changePhotoButton.waitForDisplayed({ timeout: 5000 });
    await this.changePhotoButton.click();
  }

  async waitForChangePhotoButtonVisible() {
    await this.changePhotoButton.waitForDisplayed({ timeout: 5000 });
  }

  get openEditProfileButton() {
    return $(
      "android=new UiScrollable(new UiSelector().scrollable(true))" +
        '.scrollIntoView(new UiSelector().description("open-edit-profile"))'
    );
  }

  async openEditProfile() {
    await this.openEditProfileButton.waitForDisplayed({ timeout: 8000 });
    await this.openEditProfileButton.click();
  }

  get photoPickerModal() {
    return $("~photo-picker-modal");
  }

  async openPhotoPicker() {
    await this.tapChangePhoto();
  }

  async cancelPhotoPicker() {
    const cancelBtn = $('android=new UiSelector().text("CANCEL")');
    await cancelBtn.waitForDisplayed({ timeout: 5000 });
    await cancelBtn.click();
  }
}

export default new MyProfilePage();
