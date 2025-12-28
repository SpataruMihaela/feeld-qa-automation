import { config as sharedConfig } from "./wdio.shared.conf";

export const config = {
  ...sharedConfig,

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ["./test/specs/**/*.spec.ts"],

  services: [
    [
      "browserstack",
      {
        app: "bs://IOS_APP_ID",
      },
    ],
  ],

  capabilities: [
    {
      platformName: "iOS",
      deviceName: "iPhone 14",
      platformVersion: "17",
      automationName: "XCUITest",
      appiumVersion: "2.0.1",
      project: "QA Automation Assessment",
      build: "iOS Functional Tests",
      name: "Discovery / Likes Flow",
    },
  ],
};
