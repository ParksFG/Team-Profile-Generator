const Manager = require("../lib/Manager");

describe("Manager", () => {

  describe("role", () => {
    it("should return the role Manager", () => {

      const result = new Manager().getRole();

      expect(result).toEqual("Manager");
    });
  });
});
