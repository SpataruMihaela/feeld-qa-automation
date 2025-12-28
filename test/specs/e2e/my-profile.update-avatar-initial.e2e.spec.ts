import { expect } from "@wdio/globals";
import WelcomeScreen from "../../pages/WelcomePage";
import MyProfileScreen from "../../pages/MyProfilePage";
import EditProfileScreen from "../../pages/EditProfilePage";

describe("My Profile", () => {
  it("E2E-08 updates the avatar initial after the user changes their profile name", async () => {
    const randomName = `QA${Math.floor(Math.random() * 1000)}`;
    const expectedInitial = randomName.charAt(0).toUpperCase();

    await WelcomeScreen.waitForLoaded();

    await WelcomeScreen.openMyProfile();
    await MyProfileScreen.waitForLoaded();

    await MyProfileScreen.openEditProfile();
    await EditProfileScreen.updateName(randomName);
    await EditProfileScreen.waitForSuccessMessage();

    await EditProfileScreen.navigateBack();
    await MyProfileScreen.waitForLoaded();

    await driver.back();
    await WelcomeScreen.waitForLoaded();

    const avatarInitial = await WelcomeScreen.avatarInitial.getText();
    await expect(avatarInitial).toBe(expectedInitial);
  });
});
