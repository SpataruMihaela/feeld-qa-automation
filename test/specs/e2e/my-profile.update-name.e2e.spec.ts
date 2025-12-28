import { expect } from "@wdio/globals";

import WelcomeScreen from "../../pages/WelcomePage";
import MyProfileScreen from "../../pages/MyProfilePage";
import EditProfileScreen from "../../pages/EditProfilePage";
import { profileData } from "../../data/profile.data";

describe("My Profile", () => {
  it("E2E-05 updates the user's profile name and persists the change", async () => {
    const updatedName = profileData.updatedName;

    await WelcomeScreen.waitForLoaded();
    await WelcomeScreen.openMyProfile();

    await MyProfileScreen.waitForLoaded();
    await MyProfileScreen.openEditProfile();

    await EditProfileScreen.updateName(updatedName);
    await EditProfileScreen.waitForSuccessMessage();

    await EditProfileScreen.navigateBack();

    await MyProfileScreen.waitForLoaded();
    const profileName = await MyProfileScreen.getProfileName();

    await expect(profileName).toBe(updatedName);
  });
});
