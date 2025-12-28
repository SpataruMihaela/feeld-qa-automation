import { expect } from "@wdio/globals";

import WelcomePage from "../pages/WelcomePage";
import DiscoveryPage from "../pages/DiscoveryPage";
import MyProfilePage from "../pages/MyProfilePage";
import EditProfilePage from "../pages/EditProfilePage";

describe("Smoke Tests @smoke", () => {
  it("SM-01 App launches and Welcome screen is usable", async () => {
    await WelcomePage.waitForLoaded();
    await expect(WelcomePage.continueButton).toBeDisplayed();
  });

  it("SM-02 User can continue from Welcome to Discovery", async () => {
    await WelcomePage.tapContinueButton();
    await DiscoveryPage.isDisplayed();
    await DiscoveryPage.expectAtLeastOneProfile();
  });

  it("SM-03 User sees profile card on Discovery", async () => {
    // Ensure we are on Discovery
    await WelcomePage.waitForLoaded();
    await WelcomePage.tapContinueButton();

    await DiscoveryPage.isDisplayed();
    await expect(DiscoveryPage.firstProfileCard).toBeDisplayed();
  });

  it("SM-04 User can open My Profile", async () => {
    await DiscoveryPage.openMyProfile();
    await MyProfilePage.waitForLoaded();
    await expect(MyProfilePage.profileName).toBeDisplayed();
  });

  it("SM-05 User can open Edit Profile screen", async () => {
    await DiscoveryPage.openMyProfile();
    await MyProfilePage.waitForLoaded();

    await MyProfilePage.openEditProfile();
    await expect(EditProfilePage.nameInput).toBeDisplayed();
  });
});
