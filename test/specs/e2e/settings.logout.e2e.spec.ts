import { expect } from "@wdio/globals";

import WelcomeScreen from "../../pages/WelcomePage";
import SettingsScreen from "../../pages/SettingsPage";

describe("Settings", () => {
  it("E2E-06 logs the user out and returns them to the Welcome screen", async () => {
    await WelcomeScreen.waitForLoaded();
    await WelcomeScreen.openSettings();

    await SettingsScreen.waitForLoaded();
    await SettingsScreen.tapLogout();

    await WelcomeScreen.waitForLoaded();
    await expect(await WelcomeScreen.isDisplayed()).toBe(true);
  });
});
