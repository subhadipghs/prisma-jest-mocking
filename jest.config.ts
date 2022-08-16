import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  rootDir: "./",
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: ["/node_modules"],
};

export default config;
