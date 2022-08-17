import type { Config } from "@jest/types";
import "jest-ts-auto-mock";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  rootDir: "./",
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["/node_modules"],
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  globals: {
    "ts-jest": {
      compiler: "ttypescript",
    },
  },
};

export default config;
