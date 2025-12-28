import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  runner: "local",

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  logLevel: "info",

  reporters: ["spec"],
};
