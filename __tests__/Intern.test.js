const Intern = require("../lib/Intern");

describe("Manager", () => {

  describe("role", () => {
    it("should return the role Intern", () => {

      const result = new Intern().getRole();

      expect(result).toEqual("Intern");
    });
  });
});
