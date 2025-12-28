import path from "path";
import { ensureOnWelcome } from "../test/helpers/navigation.helper";

export const config = {
  runner: "local",

  hostname: "127.0.0.1",
  port: 4723,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  specs: ["../test/specs/**/*.spec.ts"],

  maxInstances: 1,

  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Android Emulator",
      "appium:platformVersion": "13",
      "appium:automationName": "UiAutomator2",
      "appium:app": path.resolve(__dirname, "../apps/app-debug.apk"),
      "appium:noReset": true,
      "appium:autoGrantPermissions": true,
    },
  ],

  afterTest: async function () {
    try {
      if (!browser.sessionId) {
        return;
      }

      await ensureOnWelcome();
    } catch {
      console.warn("afterTest skipped — session not stable");
    }
  },
};
