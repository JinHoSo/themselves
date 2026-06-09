import { describe, expect, it } from "vitest";

import { packageInfo } from "../src/index.js";

describe("@themselves/core public exports", () => {
  it("exposes the package boundary intentionally", () => {
    expect(packageInfo).toEqual({
      name: "@themselves/core",
      milestone: "repository-skeleton",
    });
  });
});
