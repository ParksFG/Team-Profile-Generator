const Engineer = require("../lib/Engineer");

describe("Employee", () => {
  describe("github URL", () => {
    it("should return a valid URL for github", () => {
      const str = "https://github.com/ParksFG";

      const result = new Engineer('Parker', 8, "ParkerFGay@gmail.com", "ParksFG").getGithub();

      expect(result).toEqual(str);
    });
  });
  describe("role", () => {
    it("should return the role Engineer", () => {

      const result = new Engineer().getRole();

      expect(result).toEqual("Engineer");
    });
  });
});
