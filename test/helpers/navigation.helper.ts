import WelcomePage from "../pages/WelcomePage";
import DiscoveryPage from "../pages/DiscoveryPage";

export async function ensureOnWelcome() {
  if (await WelcomePage.isDisplayedSafe()) {
    return;
  }

  for (let i = 0; i < 3; i++) {
    try {
      await driver.back();
    } catch {}

    if (await WelcomePage.isDisplayedSafe()) {
      return;
    }
  }

  throw new Error("ensureOnWelcome: unable to return to Welcome screen");
}

export async function ensureOnDiscovery() {
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
