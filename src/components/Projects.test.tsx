import { describe, expect, it } from "vitest";
import { getLoopedIndex } from "./projectGallery";

describe("getLoopedIndex", () => {
  it("wraps forward to the first slide", () => {
    expect(getLoopedIndex(2, 1, 3)).toBe(0);
  });

  it("wraps backward to the last slide", () => {
    expect(getLoopedIndex(0, -1, 3)).toBe(2);
  });

  it("moves normally within range", () => {
    expect(getLoopedIndex(1, 1, 3)).toBe(2);
  });
});
