const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("email", () => {
    it("should return a valid Email", () => {
      const str = "ParkerFGay@gmail.com";

      const result = new Employee('Parker', 8, "ParkerFGay@gmail.com").getEmail(str);

      expect(result).toEqual(str);
    });
  });
  describe("role", () => {
    it("should return the role Employee", () => {

      const result = new Employee().getRole();

      expect(result).toEqual("Employee");
    });
  });
});
