import { ensureOnDiscovery } from "../../helpers/navigation.helper";
import DiscoveryPage from "../../pages/DiscoveryPage";
import ProfilePage from "../../pages/ProfilePage";

describe("Discovery", () => {
  it("E2E-02 allows a user to open another user's profile from the Discovery list and return to Discovery", async () => {
    await ensureOnDiscovery();
    await DiscoveryPage.isDisplayed();

    await DiscoveryPage.openFirstProfile();
    await ProfilePage.isDisplayed();
    await ProfilePage.expectProfileNameVisible();

    await ProfilePage.goBack();
    await DiscoveryPage.isDisplayed();
  });
});
