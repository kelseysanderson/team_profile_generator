const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return a name to team array when a user enters a name following a prompt", () => {
      const name = "Jim";
      let employee = new Employee("Jim", 20, "jim@gmail.com");

      expect(employee.name).toBe("Jim");
    });
  });
 
  describe("getId", () => {
    it("should add id to team array when a user enters an id following a prompt", () => {
      let employee = new Employee("Jim", 20, "jim@gmail.com");
      
      expect(employee.id).toEqual(20);
    });
  });

  describe("getEmail", () => {
    it("should add an email to team array when a user enters an email following a prompt", () => {
      let employee = new Employee("Jim", 20, "jim@gmail.com");
      
      expect(employee.email).toEqual("jim@gmail.com");
    });
  });
});
