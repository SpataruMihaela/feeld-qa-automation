import { expect } from "@wdio/globals";
import WelcomePage from "../../pages/WelcomePage";
import MyProfilePage from "../../pages/MyProfilePage";

describe("My Profile", () => {
  it("E2E-07 allows a user to cancel the photo picker and keep the profile unchanged", async () => {
    await WelcomePage.waitForLoaded();
    await WelcomePage.openMyProfile();
    await MyProfilePage.waitForLoaded();

    const hadImageBefore = await MyProfilePage.hasProfileImage();

    await MyProfilePage.openPhotoPicker();
    await MyProfilePage.cancelPhotoPicker();

    await MyProfilePage.waitForChangePhotoButtonVisible();

    const hadImageAfter = await MyProfilePage.hasProfileImage();
    expect(hadImageAfter).toBe(hadImageBefore);
  });
});
