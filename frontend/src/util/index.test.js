import { getCurrentDate } from "./index";
describe("Utils", () => {
  describe("getCurrentDate", () => {
    it("should return string", () => {
      const result = getCurrentDate();
      expect(typeof result).toBe("string");
    });
  });
});
