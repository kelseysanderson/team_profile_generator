const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getRole", () => {
        it("the getRole function should return the string 'Engineer'", () => {
        const engineer = new Engineer("Jim", 20, "jim@gmail.com", "jimgithub")

        expect(engineer.getRole()).toEqual("Engineer");
        });
    });

    describe("getGithub", () => {
        describe("getGithub", () => {
            it("should return a github user name", () => {
            const engineer = new Engineer("Jim", 20, "jim@gmail.com", "jimsomebody")
    
            expect(engineer.github).toEqual("jimsomebody");
            });
        });
});
})