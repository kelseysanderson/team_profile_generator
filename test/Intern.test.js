const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getRole", () => {
        it("the getRole function should return the string 'Intern'", () => {
        const intern = new Intern("Jim", 20, "jim@gmail.com", "UMN")

        expect(intern.getRole()).toEqual("Intern");        
    });
    });

    describe("getSchool", () => {
        describe("getGithub", () => {
            it("should return a school", () => {
            const intern = new Intern("Jim", 20, "jim@gmail.com", "UMN")
    
            expect(intern.school).toBe("UMN");
            });
        });
});
})