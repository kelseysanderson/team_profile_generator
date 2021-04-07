const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getRole", () => {
        it("the getRole function should return the string 'Manager'", () => {
        const manager = new Manager("Jim", 20, "jim@gmail.com", "UMN")

        expect(manager.getRole()).toEqual("Manager");        
    });
    });

    describe("getSchool", () => {
        describe("getGithub", () => {
            it("should return a school", () => {
            const manager = new Manager("Jim", 20, "jim@gmail.com", "1")
    
            expect(manager.officeNumber).toBe("1");
            });
        });
});
})