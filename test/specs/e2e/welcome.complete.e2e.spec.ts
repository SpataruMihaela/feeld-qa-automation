import WelcomePage from "../../pages/WelcomePage";
import DiscoveryPage from "../../pages/DiscoveryPage";

describe("Welcome", () => {
  it("E2E-01 allows a new user to start discovering profiles from the Welcome screen", async () => {
    if (await WelcomePage.isDisplayedSafe()) {
      await WelcomePage.tapContinueButton();
    }

    await DiscoveryPage.isDisplayed();
    await DiscoveryPage.expectAtLeastOneProfile();
  });
});
