import { main } from "./main";

describe("main.ts", () => {
  it("should return hello world", () => {
    expect(main()).toBe("hello world");
  });
});
