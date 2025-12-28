import WelcomePage from "./WelcomePage";
import DiscoveryPage from "./DiscoveryPage";

class BasePageInstance {
  async goBackUntilDiscovery() {
    if (await WelcomePage.isDisplayedSafe()) {
      await WelcomePage.tapContinueButton();
      await DiscoveryPage.isDisplayed();
      return;
    }

    if (await DiscoveryPage.isDisplayedSafe()) {
      return;
    }

    try {
      await driver.back();
    } catch {}

    await DiscoveryPage.isDisplayed();
  }
}

export default new BasePageInstance();
